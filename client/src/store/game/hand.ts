import { GameCard } from "../../types/card";
import { ArrayStoreFactory } from "../abstract/array";

export const myHand = ArrayStoreFactory<GameCard>();
export const opponentHand = ArrayStoreFactory<GameCard>();

export type CardsStore = typeof myHand;
