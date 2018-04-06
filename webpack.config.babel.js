import { join } from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/main',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'weather-app-novo',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ]
  }
}
