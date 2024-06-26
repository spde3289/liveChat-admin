import { useState, useEffect, memo, KeyboardEvent, ChangeEvent } from "react";
import { socket } from "@/socket/soket";
import { ChatLogType } from "@/type/room";
import MsgContainer from "./msgContainer";
import InputContainer from "./inputContainer";

interface ChatRoomInterface {
  roomName: String;
}

const user = "관리자";

export default memo(function ChatRoom({ roomName }: ChatRoomInterface) {
  const [chatLog, setChatLog] = useState<ChatLogType[]>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    // 방 최초 입장
    socket.emit("join room", user, roomName);
    // 채팅 입력
    socket.on("chat message", (remsg: any) => {
      setChatLog((currentMsg) => [
        ...currentMsg,
        { user: remsg.name, msg: remsg.text },
      ]);
    });

    socket.on("chat log", (chatLog: string) => {
      const chatLogParser = JSON.parse(chatLog).map((el: any) => {
        return { user: el.name, msg: el.text };
      });
      setChatLog(chatLogParser);
    });

    // 언마운트
    return () => {
      setChatLog([]);
      socket.off("user list");
      socket.off("chat log");
      socket.off("connect");
      socket.off("chat message");
      socket.off("disconnect");
    };
  }, [roomName]);

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMsg(e.target.value);
  };

  const handleKeypress = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    //Enter을 누르게 되면 실행
    if (e.key === "Enter" && !e.shiftKey) {
      if (msg) {
        SendMsg();
      }
    }
  };

  /** 채팅 입력시 메세지, id값 보냄 */
  const SendMsg = () => {
    socket.emit("chat message", msg, user);
    setMsg("");
  };

  return (
    <section className="scrollBarController flex flex-col items-center m-auto h-full w-full mx-0">
      <div className="flex h-[100%] w-full justify-between flex-col ">
        <MsgContainer user={user} chatLog={chatLog} />
        <InputContainer
          msg={msg}
          onChangeMsg={onChangeMsg}
          handleKeypress={handleKeypress}
        />
      </div>
    </section>
  );
});
