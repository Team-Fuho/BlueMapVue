/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/data': {
                target: 'https://bluecolored.de/bluemap',
                changeOrigin: true,
            },
            '/assets/playerheads': {
                target: 'https://bluecolored.de/bluemap',
                changeOrigin: true,
            },
            '/live': {
                target: 'https://bluecolored.de/bluemap',
                changeOrigin: true,
            },
        }
    },
    productionSourceMap: false,
    integrity: true,
}