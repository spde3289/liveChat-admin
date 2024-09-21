import { forwardRef } from "react";
import { ContextMenuState } from "@/customHooks/useContextMenu";

interface ListItemModalProps {
  contextMenuState: ContextMenuState;
  item: {
    id: string;
    roomName: string;
    status: string;
    selectMenu: string;
  };
}
// 리스트를 수정할 수 있는 모달창이다.
const ListItemModal = forwardRef<HTMLDivElement, ListItemModalProps>(
  ({ contextMenuState, item }, contextMenuRef) => {
    return (
      <>
        {contextMenuState.isOpen && (
          <div
            ref={contextMenuRef}
            className="fixed rounded bg-white border border-gray-300 w-48 z-50"
            style={{ top: contextMenuState.y, left: contextMenuState.x }}
          >
            {contextMenuState.menuItems.map((el: any) => (
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
      </>
    );
  }
);

export default ListItemModal;
