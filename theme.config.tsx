import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { config as faConfig, dom } from '@fortawesome/fontawesome-svg-core';

faConfig.autoAddCss = false;

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
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          property='og:title'
          content={frontMatter.title || 'theripper93'}
        />
        <meta
          property='og:description'
          content={frontMatter.description || 'The wiki for theripper93'}
        />
        <style>{dom.css()}</style>
      </>
    );
  },
  faviconGlyph: '✨',
};

export default config;
