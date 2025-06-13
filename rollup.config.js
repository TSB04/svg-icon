/* eslint-disable */
import { fileURLToPath } from "url";
import { dirname, resolve as resolvePath, join, extname } from "path";
import fs from "fs";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";

// Fix __dirname in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load package.json for peerDeps
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  "react/jsx-runtime",
];

// === Auto-generate entries ===
const jsxDir = resolvePath(__dirname, "src/icons/jsx");
const jsxEntries = fs.readdirSync(jsxDir)
  .filter(file => extname(file) === ".ts")
  .map(file => ({
    input: `src/icons/jsx/${file}`,
    outputName: file.replace(/\.ts$/, "")
  }));

// === Manually specified entries ===
const staticEntries = [
  { input: "src/index.ts", outputName: "index" },
  { input: "src/icons/iconPath/path.ts", outputName: "path" },
  { input: "src/web-component.ts", outputName: "web-component" },
];

// === Combine all entries ===
const entries = [...staticEntries, ...jsxEntries];

// === Common JS plugins ===
const basePlugins = [
  resolve(),
  commonjs(),
  svgr(),
  typescript({ tsconfig: "./tsconfig.json" }),
];

// === Generate output configs ===
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
