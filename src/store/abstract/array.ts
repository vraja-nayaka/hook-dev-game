import { createStore, createApi } from "effector";

export const ArrayStoreFactory = <Type>() => {
  const $store = createStore<Type[]>([]);

  type InsertByIndexParams = {
    index: number;
    item: Type;
  };

  const api = createApi($store, {
    add: (store, newValue: Type) => [...store, newValue],
    set: (store, newStore: Type[]) => [...newStore],
    removeByIndex: (store, index: number) => [
      ...store.slice(0, index),
      ...store.slice(index + 1),
    ],
    insertByIndex: (store, { index, item }: InsertByIndexParams) => [
      ...store.slice(0, index),
      item,
      ...store.slice(index),
    ],
  });

  return { $store, api };
};
