import { defineConfig } from '@rsbuild/core';
import { pluginStylus } from '@rsbuild/plugin-stylus';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue(), pluginStylus()],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3010',
      },
    },
  },
});
