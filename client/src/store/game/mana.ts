import { createStore, createApi } from "effector";

type ManaStore = {
  my: number;
  opponents: number;
};

export const ManaStoreFactory = () => {
  const $store = createStore<ManaStore | null>(null);

  const api = createApi($store, {
    init: () => ({
      my: 1,
      opponents: 1,
    }),
    clear: () => null,
  });

  return { $store, api };
};

export const turns = ManaStoreFactory();
