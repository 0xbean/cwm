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
