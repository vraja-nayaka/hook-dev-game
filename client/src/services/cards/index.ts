import { Sheet } from "use-google-sheets/dist/types";
import useGoogleSheets from "use-google-sheets";
import { Card } from "../../types/card";

export const getCards = (data: Sheet[]) => {
  if (!data[0]) {
    return [];
  }
  return data[0].data as Card[];
};

export const useCards = () => {
  const { data, loading } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID as string,
  });
  return { cards: getCards(data), loading };
};
