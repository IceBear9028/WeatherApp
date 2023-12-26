import {AtomEffect} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  async ({setSelf, onSet}) => {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) setSelf(JSON.parse(data));

    onSet(async (newValue, _, isReset) => {
      if (isReset) {
        return await AsyncStorage.removeItem(key);
      }
      return await AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };
