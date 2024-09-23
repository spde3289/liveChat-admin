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
            name: "카테고리",
            state:
              sort.state == "down" && sort.name === "카테고리" ? "up" : "down",
          });
        }}
        className="flex items-center justify-center w-24 p-[6px_14px] box-content "
      >
        카테고리
        <SortArrow name="카테고리" sort={sort} />
      </div>
      <div
        onClick={() => {
          setSort({
            name: "상태",
            state:
              sort.state === "down" && sort.name === "상태" ? "up" : "down",
          });
        }}
        className="flex items-center justify-center w-12 p-[6px_14px] box-content "
      >
        상태
        <SortArrow name="상태" sort={sort} />
      </div>
    </li>
  );
};

export default ListItemSort;
