export const storageService = {

  getData: (key) => {
    try {
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
      return value;
    } catch (e) {}
  },

  setData: (key, value) => {
    try {
      return localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  },

  clearAllData: () => {
    localStorage.clear();
  }
}