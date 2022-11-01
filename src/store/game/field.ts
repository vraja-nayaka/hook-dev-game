import { GameCard } from "../../types/card";
import { ArrayStoreFactory } from "../abstract/array";

export const myField = ArrayStoreFactory<GameCard>();
export const opponentField = ArrayStoreFactory<GameCard>();
