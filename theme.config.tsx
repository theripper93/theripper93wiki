import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/theripper93',
  },
  chat: {
    link: 'https://discord.com',
  },
  footer: {
    text: "Created by theripper93 and apriltaoyvr with nextra"
  },
  primaryHue: 47,
  head: <script src="https://kit.fontawesome.com/fc91175617.js" crossOrigin="anonymous"></script>
};

export default config
