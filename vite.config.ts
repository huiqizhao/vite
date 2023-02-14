import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const NODE_ENV = process.env.NODE_ENV
  // if(NODE_ENV === 'production'){}

  const plugins = [vue()]
  if (mode === 'production') {
    plugins.push(
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      })
    )
  }
  if (NODE_ENV === 'production') {
    plugins.push(
      visualizer({
        open: true, // 在默认用户代理中打开生成的文件
        gzipSize: true, //从源代码中收集 gzip 大小并将其显示在图表中
        brotliSize: true, //从源代码中收集 brotli 大小并将其显示在图表中
      })
    )
  }
  return {
    plugins: plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/main.scss";',
        },
      },
    },
    server: {
      // host: '127.0.0.1',
      // port: 5173,
      // open: true,
      // https: false,
      proxy: {
        '/api': {
          target: 'https://word-kf.thinktown.com:8443/index.php',
          changeOrigin: true,
        },
      },
    },
  }
})
