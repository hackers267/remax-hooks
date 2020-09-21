import { Store } from './interface';

export function isString(x: any): x is string {
  return typeof x === 'string';
}

export function getUrlSearch(url: string) {
  let urlSearch;
  try {
    urlSearch = new URLSearchParams(url);
  } catch (e) {
    urlSearch = url.split('&').map((value) => value.split('='));
  }
  return urlSearch;
}

export function getParams(url: string): Store {
  let urlSearch = getUrlSearch(url);
  const store: Store = {};
  for (const [key, value] of urlSearch) {
    if (isString(store[key])) {
      const str = store[key];
      store[key] = [str, value];
    } else if (store[key] instanceof Array) {
      store[key].push(value);
    } else {
      store[key] = value;
    }
  }
  return store;
}
