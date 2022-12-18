import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { config as faConfig, dom } from '@fortawesome/fontawesome-svg-core';

faConfig.autoAddCss = false;

export default {
  logo: <div style={{display: 'flex',alignItems: 'center',gap: '0.5rem'}}><img src="https://github.com/theripper93/theripper93wiki/raw/main/public/static/images/favicon.ico" style={{width: '2rem', height: '2rem'}} alt="" /> <span> TheRipper93's Wiki</span></div>,
  project: {
    link: 'https://github.com/theripper93',
  },
  docsRepositoryBase : 'https://github.com/theripper93/theripper93wiki/tree/main',
  chat: {
    link: 'https://discord.com/invite/F53gBjR97G',
  },
  footer: {
    text: 'Created by theripper93 and apriltaoyvr with Nextra',
  },
  primaryHue: {
    dark: 45,
    light: 259,
  },
  feedback: {
    content: 'Report an issue with this page →',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – TheRipper93 Wiki',
    }
  },
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
        <link rel='icon' type='image/png' href='https://github.com/theripper93/theripper93wiki/raw/main/public/static/images/favicon.ico' />
        <style>{dom.css()}</style>
      </>
    );
  },
  //logoLink: 'https://theripper93.com/assets/favicon.ico',
  //faviconGlyph: '✨',//https://theripper93.com/assets/favicon.ico
};

//export default config;
