module.exports = {
	entry: './js/app.js',
	output: {
		filename: 'out.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
				    presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader']
			}
		]
	}
}
