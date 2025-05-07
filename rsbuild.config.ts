import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginStylus } from '@rsbuild/plugin-stylus';

export default defineConfig({
    plugins: [
        pluginVue(),
        pluginStylus(),
    ],
    html: {
        template: './index.html',
    },
    source: {
        entry: {
            index: './src/main.js',
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3010',
            },
        }
    }
});