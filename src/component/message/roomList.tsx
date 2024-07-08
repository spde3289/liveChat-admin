// import axios from "axios"
import { useEffect, useState } from "react";
import { getRoomList } from "@/fetch/roomFatch";
import { RoomListType } from "@/type/room";
import ListItem from "./listItem";

const RoomList = () => {
  const [roomList, setRoomList] = useState<RoomListType>(null);

  useEffect(() => {
    getRoomList().then((response) => {
      setRoomList(response);
    });
  }, []);
  console.log(roomList);
  return (
    <>
      <ul className="h-full min-w-fit box-border overflow-y-scroll scrollBar scrollBarController">
        {roomList?.map((el) => (
          <ListItem setRoomList={setRoomList} key={el.id} item={el} />
        ))}
      </ul>
    </>
  );
};

export default RoomList;
