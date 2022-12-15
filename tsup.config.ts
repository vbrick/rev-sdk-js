//@ts-check
import { defineConfig } from 'tsup'
import browserslistToEsbuild from 'browserslist-to-esbuild';

import path from 'node:path';
import fs from 'node:fs';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

function fileEntryName(filepath) {
    return path.basename(filepath, '.js');
}

const paths = {
    browser: fileEntryName(pkg.browser),
    esm: fileEntryName(pkg.module),
    commonjs: fileEntryName(pkg.exports.require)
}


export default defineConfig([
    {
        entry: {
            [paths.esm]: 'src/index.ts'
        },
        outExtension: ctx => ({ js: '.js' }),
        format: 'esm',
        platform: 'browser',
        target: [...browserslistToEsbuild(), 'node16'],
        splitting: false,
        sourcemap: true,
        dts: true,
        clean: false
    },
    {
        entry: {
            [paths.commonjs]: 'src/index.ts'
        },
        format: 'cjs',
        outExtension: ctx => ({ js: '.js' }),
        platform: 'browser',
        splitting: false,
        sourcemap: true,
        dts: true,
        clean: false
    },
    {
        entry: {
            [paths.browser]: 'src/index.ts'
        },
        format: 'iife',
        globalName: 'revSdk',
        platform: 'browser',
        target: browserslistToEsbuild(),
        outExtension: ctx => ({ js: '.js' }),
        splitting: false,
        sourcemap: true,
        dts: true,
        clean: false
    }
])