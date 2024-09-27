import { useEffect, useState } from "react";
import { getRoomList } from "@/fetch/roomFatch";
import { RoomListType } from "@/type/room";
import ListItemSort from "./ListItemSort";
import ListItem from "./ListItem";

export type sortType = { name: "selectMenu" | "status"; state: "down" | "up" };

const RoomList = () => {
  const [roomList, setRoomList] = useState<RoomListType>(null);
  const [sort, setSort] = useState<sortType>({
    name: "selectMenu",
    state: "down",
  });

  useEffect(() => {
    getRoomList().then((response) => {
      setRoomList(response);
    });
  }, []);

  useEffect(() => {
    // 채팅방 리스트가 있다면 실행
    if (roomList != null) {
      if (sort.state === "down") {
        setRoomList(
          [...roomList].sort((a, b) => {
            return a[sort.name] < b[sort.name]
              ? 1
              : a[sort.name] > b[sort.name]
              ? -1
              : 0;
          })
        );
      } else if (sort.state === "up") {
        setRoomList(
          [...roomList].sort((a, b) => {
            return a[sort.name] < b[sort.name]
              ? -1
              : a[sort.name] > b[sort.name]
              ? 1
              : 0;
          })
        );
      }
    }
  }, [sort]);

  return (
    <>
      <ul className="h-full min-w-fit box-border overflow-y-scroll scrollBar scrollBarController">
        <ListItemSort sort={sort} setSort={setSort} />
        {roomList?.map((el) => (
          <ListItem setRoomList={setRoomList} key={el.id} item={el} />
        ))}
      </ul>
    </>
  );
};

export default RoomList;
