const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' // O arquivo final (de saída) vai ter o mesmo nome que tiver na propriedade do objeto atribuído à propriedade "entry", nesse caso se chamará "bundle"
    }
}