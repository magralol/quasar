module.exports = {
 entry: './src/app.js',
 output: {
   filename: './bin/app.js',
   path: __dirname
 },
 module: {
   rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
   ]
 },
 resolve: {
   extensions: [".vue", ".js"]
 }
};