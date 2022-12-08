import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>theripper93</span>,
  project: {
    link: 'https://github.com/theripper93',
  },
  chat: {
    link: 'https://discord.com/invite/F53gBjR97G',
  },
  footer: {
    text: 'Created by theripper93 and apriltaoyvr with nextra',
  },
  primaryHue: 45,
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='theripper93 wiki' />
      <meta property='og:description' content='The wiki for theripper93' />
      <script
        src='https://kit.fontawesome.com/fc91175617.js'
        crossOrigin='anonymous'
      ></script>
    </>
  ),
};

export default config;
