import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { config as faConfig, dom } from '@fortawesome/fontawesome-svg-core';

faConfig.autoAddCss = false;

const config: DocsThemeConfig = {
  logo: <span>TheRipper93's WIKI</span>,
  project: {
    link: 'https://github.com/theripper93',
  },
  chat: {
    link: 'https://discord.com/invite/F53gBjR97G',
  },
  footer: {
    text: 'Created by theripper93 and apriltaoyvr with Nextra',
  },
  titleSuffix: ' - TheRipper93 WIKI',
  primaryHue: 45,
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          property='og:title'
          content={'✨ TheRipper93'}
        />
        <meta
          property='og:description'
          content={'The wiki for TheRipper93'}
        />
        <link rel='icon' type='image/png' href='/static/images/favicon.png' />
        <style>{dom.css()}</style>
      </>
    );
  },
  faviconGlyph: '✨',//https://theripper93.com/assets/favicon.ico
};

export default config;
