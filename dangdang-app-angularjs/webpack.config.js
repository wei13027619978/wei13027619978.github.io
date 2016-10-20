module.exports = {
    entry: './assets/app.js',
    output: {
        path: './assets',
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {test: /\.html$/, loader:'html'}
        ]
    }
}