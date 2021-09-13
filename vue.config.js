const path = require('path')
module.exports = {
    css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "~@/assets/style/variables.scss";`
			}
		}
	},

    chainWebpack: (config) => {
        config.entry('main').add('babel-polyfill');
    },

    transpileDependencies: [],

    devServer: {
        proxy: {
            '/': {
                target: 'http://m.kugou.com',
                ws: true,
                changeOrigin: true
            }

        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [path.resolve(__dirname, './src/assets/style/*.scss')]
      }
    }
}
