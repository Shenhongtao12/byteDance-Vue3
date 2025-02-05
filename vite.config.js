import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        // https://cn.vitejs.dev/config/#resolve-alias
        alias: {
            // 设置路径
            '~': path.resolve(__dirname, './'),
            // 设置别名
            '@': path.resolve(__dirname, './src')
        },
        // https://cn.vitejs.dev/config/#resolve-extensions
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    // vite 相关配置
    server: {
        port: 80,
        host: true,
        open: true,
        proxy: {
            '/dev-api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/dev-api/, '')
            },
            '/stage-api': {
                target: 'https://service-yunlin-test.qinchuangyuan.com',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/stage-api/, '')
            },
            '/prod-api': {
                target: 'https://service-yunlin.qinchuangyuan.com',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/prod-api/, '')
            }
        }
    },

    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "${path.resolve(__dirname, 'src/assets/style/variable.less')}";`,
                javascriptEnabled: true,
            }
        },
    },

})
