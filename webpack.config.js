const path = require('path');
const fs = require('fs');
const babelrcConfig = JSON.parse(fs.readFileSync('.babelrc', 'utf8'));

const BABEL_LOADER = {
	loader: 'babel-loader',
	options: {
		...babelrcConfig,
		babelrc: false
	}
};

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'rev-sdk.js',
		library: {
			name: 'revSdk',
			type: 'umd'
		}
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					BABEL_LOADER,
					'ts-loader'
				],
				include: [path.join(__dirname, 'src')]
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
