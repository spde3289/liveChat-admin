import SortArrow from "./SortArrow";
import { sortType } from "./RoomList";

interface ListItmeSort {
  sort: sortType;
  setSort: React.Dispatch<sortType>;
}

const ListItemSort = ({ sort, setSort }: ListItmeSort) => {
  return (
    <li className="border-b-[1px] flex w-fit  cursor-pointer text-sm select-none text-center">
      <div className="flex items-center justify-center w-40 p-[6px_14px] box-content whitespace-nowrap overflow-hidden text-ellipsis">
        방 이름
      </div>
      <div
        onClick={() => {
          setSort({
            name: "selectMenu",
            state:
              sort.state == "down" && sort.name === "selectMenu"
                ? "up"
                : sort.state === "up" && sort.name != "selectMenu"
                ? sort.state
                : "down",
          });
        }}
        className="flex items-center justify-center w-24 p-[6px_14px] box-content "
      >
        카테고리
        <SortArrow name="selectMenu" sort={sort} />
      </div>
      <div
        onClick={() => {
          setSort({
            name: "status",
            state:
              sort.state === "down" && sort.name === "status"
                ? "up"
                : sort.state === "up" && sort.name != "status"
                ? sort.state
                : "down",
          });
        }}
        className="flex items-center justify-center w-12 p-[6px_14px] box-content "
      >
        상태
        <SortArrow name="status" sort={sort} />
      </div>
    </li>
  );
};

export default ListItemSort;
