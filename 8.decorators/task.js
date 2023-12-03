//Задача № 1
function cachingDecoratorNew(func) {
  const md5 = require('./js-md5.js');

  function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
    return (...args) => {
      const hash = md5(args);
      const cacheItem = cache.find(item => item.hash === hash);
      if (cacheItem) {
        console.log(`Из кеша: ${cacheItem.value}`);
        return `Из кеша: ${cacheItem.value}`;
      }

      const result = func(...args);
      cache.push({ hash: hash, value: result });
      if (cache.length > maxCacheValuesCount) {
        cache.shift();
      }
      console.log(`Вычисляем: ${result}`);
      return `Вычисляем: ${result}`;
    };
  }

  module.exports = {
    cachingDecoratorNew
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!timeoutId) {
      func(...args);
      wrapper.count++;
    }

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }
  return wrapper;
}

module.exports = {
  debounceDecoratorNew,
}
