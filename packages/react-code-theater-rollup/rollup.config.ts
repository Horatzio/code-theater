import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { RollupOptions } from 'rollup';
import { dts } from "rollup-plugin-dts";

const buildConfig: RollupOptions = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'esm',
            exports: 'named',
            sourcemap: true,
            sourcemapBaseUrl: '.',
        },
    ],
    plugins: [
        typescript({
            exclude: ['rollup.config.ts']
        }),
        json(),
        peerDepsExternal(),

        nodeResolve(),
        commonjs(),

        terser(),
    ]
};

const dtsConfig: RollupOptions = {
    input: "./dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
};

export default [buildConfig, dtsConfig];