import useRoomContext from "@/context/useRoomContext";
import useContextMenu, { ContextMenuItem } from "@/customHooks/useContextMenu";

const ListItem = ({ item }: any) => {
  const { selectedRoom, setSelectedRoom } = useRoomContext();

  const {
    contextMenuRef,
    contextMenuState,
    handleContextMenu,
    handleMenuItemClick,
  } = useContextMenu();

  const handleRightClick = (event: React.MouseEvent) => {
    const menuItems: ContextMenuItem[] = [
      {
        label: "상태 편집",
        action: () => handleMenuItemClick(() => {}),
        sub: [
          {
            label: "진행중",
            action: () => {
              console.log("진행중");
            },
          },
          {
            label: "종료됨",
            action: () => console.log("종료됨"),
          },
        ],
      },
      {
        label: "방 삭제",
        action: () =>
          handleMenuItemClick(() => {
            console.log("Rename action is triggering");
          }),
      },
    ];

    handleContextMenu(event, menuItems);
  };

  const current = selectedRoom === item.id ? "bg-slate-300" : "";

  return (
    <>
      {contextMenuState.isOpen && (
        <div
          ref={contextMenuRef}
          className="fixed rounded bg-white border border-gray-300 w-48 z-50"
          style={{ top: contextMenuState.y, left: contextMenuState.x }}
        >
          {contextMenuState.menuItems.map((el) => (
            <div
              key={el.label}
              className={`${
                el.sub ? "list dropdown" : ""
              } relative px-3 py-2 cursor-pointer border border-white hover:border-gray-400 text-sm text-gray-500`}
              onClick={(e) => {
                if (el.sub) {
                  e.preventDefault();
                }
                el.action();
              }}
            >
              {el.label}
              {el.sub && (
                <div className="dropdown-content bg-white z-50 border border-gray-300 absolute top-[-2px] right-[-84px]">
                  {el.sub.map((ii: any) => (
                    <div
                      key={ii.label}
                      className={`${
                        ii.label === item.status
                          ? "text-black check"
                          : "text-gray-500"
                      } px-3 py-2 cursor-pointer border border-white hover:border-gray-400 text-sm text-right`}
                      onClick={() => ii.action()}
                    >
                      {ii.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <li
        onClick={() => setSelectedRoom(item.id)}
        onContextMenu={(e) => {
          handleRightClick(e);
          setSelectedRoom(item.id);
        }}
        className={`${current} border-b-[1px] flex w-fit text-sm cursor-pointer select-none`}
      >
        <div className="w-40 p-[6px_14px] box-content whitespace-nowrap overflow-hidden text-ellipsis">
          {item.roomName}
        </div>
        <div className="w-24 p-[6px_14px] box-content ">{item.selectMenu}</div>
        <div className="w-12 p-[6px_14px] box-content ">{item.status}</div>
      </li>
    </>
  );
};

export default ListItem;
