class UseLocalStorage {
  whiteList: string[];
  constructor(whiteList: string[] = []) {
    this.whiteList = whiteList;
  }
  getLocal(key: string) {
    if (!this.whiteList.includes(key)) return;
    return localStorage.getItem(key);
  }
  setLocal(key: string, value: string) {
    if (!this.whiteList.includes(key)) return;
    if (typeof value !== 'string') value = JSON.stringify(value);
    return localStorage.setItem(key, value);
  }
}

const useLocalStorage = new UseLocalStorage(['language']);

export default useLocalStorage;
