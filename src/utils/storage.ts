import { LocalStorageIdEnum } from '../enum/utility.enum';

export function getIsClient() {
  return typeof window !== 'undefined';
}

export function getLocalStorageData<T>(
  key: LocalStorageIdEnum,
  initialValue: T
): T {
  if (getIsClient()) {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  }

  return initialValue;
}

export function setLocalStorageData<T>(key: LocalStorageIdEnum, data: T) {
  if (getIsClient()) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
