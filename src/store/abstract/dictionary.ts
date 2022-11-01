import { createStore, createApi } from "effector";

export const DictionaryStoreFactory = <Type>() => {
  const $store = createStore<Record<string, Type & { uid: number }>>({});
  let uid = 0;

  const api = createApi($store, {
    add: (store, newValue: Type) => {
      uid++;
      return { ...store, [uid]: { ...newValue, uid } };
    },
  });

  const get = (uid: number) => $store.getState()[uid];
  const getLast = () => $store.getState()[uid];

  return { $store, api, get, getLast };
};
