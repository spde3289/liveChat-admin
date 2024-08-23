import { useEffect } from "react";
import useRoomContext from "@/context/useRoomContext";
import { socket } from "@/socket/soket";
import ChatRoom from "./chatRoom";

const user = "관리자";

const ChatRoomLobby = () => {
  const { selectedRoom } = useRoomContext();

  useEffect(() => {
    socket.connect();
    return () => {
      socket.emit("나가기", user);
      if (socket) {
        socket.disconnect();
      }
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
