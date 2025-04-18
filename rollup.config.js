import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";
// import pkg from "./package.json" assert { type: "json" };
import fs from "fs";
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  'react/jsx-runtime'
];

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "esm", sourcemap: true }
    ],
    plugins: [
      resolve(),
      commonjs(),
      svgr(),
      typescript({ tsconfig: "./tsconfig.json" })
    ],
    // external: Object.keys(pkg.peerDependencies || {})
    external: externalDeps

  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()]
  }
];
