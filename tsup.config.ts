//@ts-check
import { defineConfig, Options } from 'tsup'
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig([
    {
        entry: {
            'rev-sdk': 'src/index.ts'
        },
        format: ['esm', 'cjs', 'iife'],
        platform: 'browser',
        target: [...browserslistToEsbuild(), 'node18'] as Options['target'],
        outExtension({ format, pkgType}) {
            switch (format) {
                case 'cjs': return { js: '.cjs.js', dts: '.d.ts' }
                case 'esm': return { js: '.esm.js', dts: '.esm.d.ts' }
                case 'iife': return { js: '.js', dts: '.d.ts' }
            }
        },
        globalName: 'revSdk',
        splitting: false,
        sourcemap: true,
        dts: true,
        clean: true
    }
])