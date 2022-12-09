const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  images: {
    domains: ['user-images.githubusercontent.com'],
  },
});


function getWikiPage(moduleName, status){
  let url = 'theripper93.com/wiki/'
  let root = '';
  if(moduleName == 'Levels') return 'theripper93.com/wiki/levels';
  if(moduleName == '3D Canvas') return 'theripper93.com/wiki/3D-Canvas';
  if(moduleName.toLowerCase().includes('3d')) root = '3D'
  else if(moduleName.toLowerCase().includes('levels')) root = 'levels'
  else if(status === 'free') root = 'free'
  else if(status === 'paid') root = 'premium'
  url += root + '/';
  url += moduleName.replaceAll(' ', '-');
  return url;
}