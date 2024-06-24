import { useEffect } from "react";
import useRoomContext from "@/context/useRoomContext";
import { socket } from "@/socket/soket";
import ChatRoom from "./chatRoom";

// const user = "관리자";

const ChatRoomLobby = () => {
  const { selectedRoom } = useRoomContext();
  console.log(selectedRoom);

  useEffect(() => {
    socket.connect();
    return () => {
      // socket.emit("나가기", user);
      if (socket) {
        socket.disconnect();
      }
    };
  }, [selectedRoom]);

  useEffect(() => {
    // 방 최초 입장

    // if (selectedRoom === null) {
    //   socket.emit("join room", user, selectedRoom);
    // }
    // 채팅 입력

    // socket.on("chat message", (remsg: any) => {
    //   setChatLog((currentMsg) => [
    //     ...currentMsg,
    //     { user: remsg.name, msg: remsg.text },
    //   ]);
    // });

    // socket.on("chat log", (chatLog: string) => {
    //   const chatLogParser = JSON.parse(chatLog).map((el: any) => {
    //     return { user: el.name, msg: el.text };
    //   });
    //   setChatLog(chatLogParser);
    // });

    // 언마운트
    return () => {
      // setChatLog([]);
      // socket.off("user list");
      // socket.off("chat log");
      // socket.off("connect");
      // socket.off("chat message");
      // socket.off("disconnect");
    };
  }, [selectedRoom]);

  return (
    <>
      <div className="h-full">
        {selectedRoom === null ? (
          "선택된 항목이 없습니다."
        ) : (
          <ChatRoom roomName={selectedRoom} />
        )}
      </div>
    </>
  );
};

export default ChatRoomLobby;
