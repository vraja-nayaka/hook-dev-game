import { io, Socket } from "socket.io-client";
import { reorderCardsMap } from "../../components/cards/reorder";
import { getCardHoldersMap } from "../../domen/cards";

let socket: Socket;

export const initSocket = () => {
  socket = io("http://localhost:3000/");

  socket.on("connect", () => {
    console.log("connected as ", socket.id);
  });

  socket.on("newMessage", (body) => {
    if (body.socketId === socket.id) {
      return;
    }

    if (body.type === "reorder") {
      const cardHoldersMap = getCardHoldersMap();

      reorderCardsMap({
        cardHoldersMap,
        destination: body.data.destination,
        source: body.data.source,
      });
    }
  });
};

export const sendNewMessage = (body: any) => {
  socket.emit("newMessage", { ...body, socketId: socket.id });
};
