import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path"; // <-- You forgot this
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";
import fs from "fs";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

// External dependencies (not bundled)
const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  "react/jsx-runtime",
];

// Find all folders in src/icons/jsx/
const jsxDir = path.resolve(__dirname, "src/icons/jsx");
const folders = fs.readdirSync(jsxDir).filter((name) => {
  const fullPath = path.join(jsxDir, name);
  return fs.statSync(fullPath).isDirectory();
});

// Create entries dynamically
const entries = [
  { input: "src/index.ts", outputName: "index" },
  { input: "src/icons/iconPath/path.ts", outputName: "path" },
  ...folders.map((folder) => ({
    input: `src/icons/jsx/${folder}/index.ts`,
    outputName: folder,
  })),
];

const basePlugins = [
  resolve(),
  commonjs(),
  svgr(),
  typescript({ tsconfig: "./tsconfig.json" }),
];

// Build configs dynamically
const builds = entries.flatMap(({ input, outputName }) => [
  {
    input,
    output: [
      { file: `dist/${outputName}.cjs`, format: "cjs", sourcemap: true },
      { file: `dist/${outputName}.mjs`, format: "esm", sourcemap: true },
    ],
    plugins: basePlugins,
    external: externalDeps,
  },
  {
    input,
    output: [{ file: `dist/${outputName}.d.ts`, format: "es" }],
    plugins: [dts()],
  },
]);

export default builds;
