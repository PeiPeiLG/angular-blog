export const LOCAL_STORAGE_KEYS = {
  /** themeModel */
  theme: 'theme',
};

export class GET_LOCAL_STORAGE {
  /**
   * 獲取themeModel
   */
  get theme(): 'light' | 'dark' {
    return (
      localStorageUtil.get<'light' | 'dark'>(LOCAL_STORAGE_KEYS.theme) ??
      'light'
    );
  }
}

export class SET_LOCAL_STORAGE {
  /**設定AzureAD Token(存進LocalStorage)  */
  set theme(theme: 'light' | 'dark') {
    localStorageUtil.set<'light' | 'dark'>(LOCAL_STORAGE_KEYS.theme, theme);
  }
}

/** LocalStorage 操作工具 */
const localStorageUtil = {
  /**
   * 儲存資料到 LocalStorage
   * @param key LocalStorage 的 key
   * @param value 要儲存的值
   */
  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
  /**
   * 從 LocalStorage 讀取資料
   * @param key LocalStorage 的 key
   * @returns 解析後的資料或 null
   */
  get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  },
  /**
   * 移除 LocalStorage 中的特定項目
   * @param key LocalStorage 的 key
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  },
  /** 清空 LocalStorage */
  clear(): void {
    localStorage.clear();
  },
};
