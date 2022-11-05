import { createStore, createApi } from "effector";

export const ActiveStoreFactory = <Type>() => {
  const $store = createStore<Type | null>(null);

  const api = createApi($store, {
    set: (_, newValue: Type | null) => newValue,
    clear: () => null,
  });

  return { $store, api };
};

export const activeCardUid = ActiveStoreFactory<number>();
