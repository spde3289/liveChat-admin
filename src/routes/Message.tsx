import RoomList from "@/component/message/RoomList";
import ChatRoomLobby from "@/component/message/ChatRoomLobby";

const MessagePage = () => {
  return (
    <>
      <div className="flex px-5 py-3 h-full">
        <RoomList />
        <div className="px-6 w-full border-l-[1px]">
          <ChatRoomLobby />
        </div>
      </div>
    </>
  );
};

export default MessagePage;
