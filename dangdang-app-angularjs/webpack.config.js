module.exports = {
    entry: './assets/app.js',
    output: {
        path: './assets',
        filename: 'bundle.js'
    },
    module: {
        loader:[
            {test: /\.html$/, loader:'html'}
        ]
    }
}