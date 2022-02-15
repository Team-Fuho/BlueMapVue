/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const t = p => `http://localhost:${p}`
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/data/': {
                target: t(8081),
                changeOrigin: true,
            },
            '/assets/images': {
                target: t(8081),
                changeOrigin: t(8081)
            },
            '/assets/playerheads': {
                target: t(8080),
                changeOrigin: true,
            },
            '/live': {
                target: t(8080),
                changeOrigin: true,
            },
        }
    },
    productionSourceMap: false,
    integrity: true,
}