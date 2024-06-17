// import axios from "axios"
import { useEffect } from "react";
import { getRoomList } from "@/fetch/roomFatch";

const MessagePage = () => {
  useEffect(() => {
    getRoomList().then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <div>메세지 페이지</div>
    </>
  );
};

export default MessagePage;
