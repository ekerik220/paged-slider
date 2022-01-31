import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import bundleSize from "rollup-plugin-bundle-size";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

import pkg from "./package.json";

const config = [
  {
    input: "src/lib/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      url(),
      svgr(),
      typescript({ tsconfig: "./tsconfig.json", rootDir: "src/lib" }),
      postcss({
        extract: false,
        modules: true,
      }),
      terser(),
      bundleSize(),
      visualizer(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;
