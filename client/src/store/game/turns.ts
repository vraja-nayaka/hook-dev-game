import { createStore, createApi } from "effector";

type TurnsStore = {
  turn: number;
  isMy: boolean;
};

export const TurnsStoreFactory = () => {
  const $store = createStore<TurnsStore | null>(null);

  const api = createApi($store, {
    init: (store, { isMy }: { isMy: boolean }) => ({ turn: 0, isMy }),
    next: (store) =>
      store ? { turn: store.turn + 1, isMy: !store.isMy } : null,
    clear: () => null,
  });

  return { $store, api };
};

export const turns = TurnsStoreFactory();
