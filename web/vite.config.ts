import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import vitePluginOgImageGen from '@redwoodjs/ogimage-gen/plugin'
import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  plugins: [redwood(), vitePluginOgImageGen()],
}

export default defineConfig(viteConfig)
