// https://youmightnotneed.com/lodash/

export function chunk(arr, chunkSize = 1, cache = []) {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
}

// https://gist.github.com/robmathers/1830ce09695f759bf2c4df15c29dd22d#gistcomment-3486844

/**
 * @param {any[]} arr
 * @param {string} parentKey
 * @param {string[]} keys
 */
export const groupBy = (arr, parentKey, keys) => {
  return arr.reduce((storage, item) => {
    const parentObj = item[parentKey];
    const objKey = keys.map((key) => `${parentObj[key]}`).join(':'); //should be some unique delimiter that wont appear in your keys
    if (storage[objKey]) {
      storage[objKey].push(item);
    } else {
      storage[objKey] = [item];
    }
    return storage;
  }, {});
};

export function heroImage(pathname) {
  let image = '';
  const params = pathname.split('/');
  let path = `/${params[1]}`;
  switch (path) {
    case '/':
      break;
    case '/about':
      image = '/images/about.png';
      break;
    case '/ministries':
      switch (`${params[2]}`) {
        case 'care-net':
          image = '/images/care-net.png';
          break;
        case 'short-term':
          image = '/images/stm.png';
          break;
        case 'supp-mission':
          image = '/images/supported-missionaries.png';
          break;
        case 'supp-org':
          image = '/images/supported-organizations.png';
          break;
      }
      break;
    case '/resources':
      switch (`${params[2]}`) {
        case 'perspectives':
          image = '/images/perspectives.png';
          break;
        case 'seminars':
          image = '/images/seminars.png';
          break;
        case 'senior-missions':
          image = '/images/senior-missions-training.png';
          break;
        case 'short-term':
          image = '/images/stm-training.png';
          break;
      }
      break;
    default:
      break;
  }

  return image;
}
