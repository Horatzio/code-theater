import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { RollupOptions } from 'rollup';
import { dts } from "rollup-plugin-dts";
import scss from 'rollup-plugin-scss';

const buildConfig: RollupOptions = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'esm',
            exports: 'named',
            sourcemap: true,
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
        scss({
            fileName: 'index.css',
            sourceMap: true,
            include: 'src/**/*.{css,scss}',
            watch: 'src',
        })
    ],
};

const dtsConfig: RollupOptions = {
    input: "./dist/cjs/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.s?css$/]
};

export default [buildConfig, dtsConfig];