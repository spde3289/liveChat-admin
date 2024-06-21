import RoomList from "@/component/message/roomList";
import ChatRoom from "@/component/message/chatRoom";

const MessagePage = () => {

  return (
    <>
      <div className="flex px-5 py-3 h-full">
        <RoomList />
        <div className="px-6 w-full border-l-[1px]">
          <ChatRoom />
        </div>
      </div>
    </>
  );
};

export default MessagePage;
