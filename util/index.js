export function getSidebarItems($site) {
  const { pages, themeConfig } = $site;
  const { sidebarConfig } = themeConfig;
  let sidebarList = {};

  pages.filter(item => {
    const mdPath = item.relativePath;
    // 过滤掉README.md.
    if (mdPath.indexOf('/') == -1) {
      return true;
    }

    const mdCategory = getSidebarItemCategory(mdPath);
    if (!sidebarList[mdCategory]) {
      sidebarList[mdCategory] = {
        title: getSidebatItemCategoryName(mdCategory, sidebarConfig),
        items: [],
      };
    }
    sidebarList[mdCategory].items.push(item);
  });

  sidebarList = resolveLevel2Category(sidebarList, sidebarConfig);
  return sidebarList;
}

function getSidebarItemCategory(mdPath) {
  let tmp = mdPath.split('/');
  return tmp[0];
}

function getSidebatItemCategoryName(category, sidebarConfig) {
  return sidebarConfig[category].title || '';
}

function resolveLevel2Category(sidebarList, sidebarConfig) {
  let newSidebarList = deepClone(sidebarList);
  let tmpArray = {};
  for (var i in sidebarList) {
    if (sidebarConfig[i].items !== undefined) {
      newSidebarList[i].items = [];
      sidebarList[i].items.map(sidebar => {
        let mdPath = sidebar.relativePath;
        let level2 = mdPath.split('/')[1];
        if (tmpArray[level2] === undefined) {
          tmpArray[level2] = {
            title: sidebarConfig[i].items[level2],
            items: [],
          };
        }
        tmpArray[level2].items.push(sidebar);
      });

      for (var tmp in tmpArray) {
        newSidebarList[i].items.push(tmpArray[tmp]);
      }
    }
  }
  return newSidebarList;
}

export function isObject(o) {
  return (typeof o === 'object' || typeof o === 'function') && o !== null;
}

export function deepClone(obj) {
  if (!isObject(obj)) {
    throw new Error('obj 不是一个对象！');
  }
  let isArray = Array.isArray(obj);
  let cloneObj = isArray ? [] : {};
  for (let key in obj) {
    cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  }

  return cloneObj;
}
