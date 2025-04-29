/* eslint-disable */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";
import fs from "fs";

// Read peerDependencies from package.json
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  "react/jsx-runtime",
];

// Manually defined entries
const entries = [
  { input: "src/index.ts", outputName: "index" },
  { input: "src/icons/iconPath/path.ts", outputName: "path" },
  { input: "src/icons/jsx/brand.ts", outputName: "brand" },
  { input: "src/icons/jsx/page.ts", outputName: "page" },
  { input: "src/icons/jsx/shape.ts", outputName: "shape" },
];

// Shared JS build plugins
const basePlugins = [
  resolve(),
  commonjs(),
  svgr(),
  typescript({ tsconfig: "./tsconfig.json" }),
];

// Generate JS + DTS builds
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
