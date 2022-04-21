//@ts-check
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const babelrcConfig = JSON.parse(fs.readFileSync('.babelrc', 'utf8'));
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const BABEL_LOADER = {
	loader: 'babel-loader',
	options: {
		...babelrcConfig,
		babelrc: false
	}
};

/** @type {import("webpack").Configuration} */
const webpackConfig = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.ts',

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					BABEL_LOADER,
					'ts-loader'
				],
				include: [fileURLToPath(new URL('src', import.meta.url))]
			},
		]
	},

	resolve: {
		extensions: ['.js', '.ts']
	},
	watchOptions: {
		poll: 5000
	}
};

/** @type {import("webpack").Configuration[]} */
export default [
	// UMD export
	{
		...webpackConfig,
		output: {
			path: fileURLToPath(new URL('dist', import.meta.url)),
			filename: path.basename(pkg.browser),
			library: {
				name: 'revSdk',
				type: 'umd'
			}
		}
	},
	// ES export
	{
		...webpackConfig,
		experiments: {
			outputModule: true
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: path.basename(pkg.module),
			library: {
				type: 'module'
			}
		}	
	}
]