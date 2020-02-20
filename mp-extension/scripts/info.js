const extensionInfo = require('../extension.json');

exports.getInfo = async function () {
  let pages = [];
  pages.push({
    pageName: 'app',
    url: '',
    components: extensionInfo.app,
    methods: []
  });
  let pageNames = Object.keys(extensionInfo.pages);
  for (let pageName of pageNames) {
    let pageInfo = extensionInfo.pages[pageName];
    pages.push({
      pageName,
      url: '',
      components: pageInfo,
      methods: []
    });
  }
  return pages;
}
