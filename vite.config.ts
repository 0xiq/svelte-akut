import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    enhancedImages(),
    Icons({
      compiler: 'svelte',
      autoInstall: true // optional: grabs icon sets on-demand
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '$lib/scss/var' as *; @use '$lib/scss/media' as *;`
      }
    }
  }
});


