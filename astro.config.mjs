import { defineConfig, passthroughImageService } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

import { remarkModifiedTime } from './remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://tommylauch.github.io',
    integrations: [mdx(), sitemap(), tailwind()],
    markdown: {
        remarkPlugins: [remarkModifiedTime],
        shikiConfig: {
          // Choose from Shiki's built-in themes (or add your own)
          // https://shiki.style/themes
          // Alternatively, provide multiple themes
          // See note below for using dual light/dark themes
          themes: {
            light: 'poimandres',
            dark: 'catppuccin-latte',
          },
        },
      },
    image: {
      service: passthroughImageService(),
    },
})
