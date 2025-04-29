import { fileURLToPath } from "url";
import { dirname, resolve as resolvePath, join, extname } from "path";
import fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

// External dependencies (not bundled)
const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  "react/jsx-runtime",
];

// Collect all .ts files in src/icons/jsx (excluding index files)
const jsxDir = resolvePath(__dirname, "src/icons/jsx");
const jsxEntries = fs.readdirSync(jsxDir)
  .filter((name) => {
    const fullPath = join(jsxDir, name);
    const isFile = fs.statSync(fullPath).isFile();
    return isFile && extname(name) === ".ts";
  })
  .map((file) => ({
    input: `src/icons/jsx/${file}`,
    outputName: file.replace(/\.ts$/, "")
  }));

// Base entries
const baseEntries = [
  { input: "src/index.ts", outputName: "index" },
  { input: "src/icons/iconPath/path.ts", outputName: "path" },
];

// Combine all entries
const entries = [...baseEntries, ...jsxEntries];

// Shared plugins for JS builds
const basePlugins = [
  resolve(),
  commonjs(),
  svgr(),
  typescript({ tsconfig: "./tsconfig.json" }),
];

// Build configs
const builds = entries.flatMap(({ input, outputName }) => [
  // JS (CJS + ESM)
  {
    input,
    output: [
      { file: `dist/${outputName}.cjs`, format: "cjs", sourcemap: true },
      { file: `dist/${outputName}.mjs`, format: "esm", sourcemap: true },
    ],
    plugins: basePlugins,
    external: externalDeps,
  },
  // Type declarations
  {
    input,
    output: [{ file: `dist/${outputName}.d.ts`, format: "es" }],
    plugins: [dts()],
  },
]);

export default builds;
