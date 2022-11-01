export type Card = {
  id: string;
  title: string;
  description: string;
  cost: number;
  damage: number;
  level: number;
  tech: string;
  aspect: string;
};

export type GameCard = Card & {
  uid: number;
};

export enum CardHolder {
  myHand = "myHand",
  opponentHand = "opponentHand",
  myField = "myField",
  opponentField = "opponentField",
}

export type Deck = {
  cardIds: number[];
};
