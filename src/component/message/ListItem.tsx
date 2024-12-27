import useRoomContext from '@/context/useRoomContext'
import useContextMenu, { ContextMenuItem } from '@/customHooks/useContextMenu'
// import { DeleteRoom, EditRoom } from "@/fetch/roomFatch";
import { RoomListType } from '@/type/room'
import ListItemModal from './ListItemModal'

import { stateAction, deleteAction } from './action'

interface ListItemProps {
  item: {
    id: string
    roomName: string
    status: string
    selectMenu: string
  }
  setRoomList: React.Dispatch<React.SetStateAction<RoomListType>>
}

const ListItem = ({ item, setRoomList }: ListItemProps) => {
  const { selectedRoom, setSelectedRoom } = useRoomContext()

  const {
    contextMenuRef,
    contextMenuState,
    handleContextMenu,
    handleMenuItemClick,
  } = useContextMenu()
  // modal을 통해 수정할 수 있는 함수
  const handleRightClick = (event: React.MouseEvent) => {
    const menuItems: ContextMenuItem[] = [
      {
        label: '상태 편집',
        action: () => handleMenuItemClick(() => {}),
        sub: [
          {
            label: '진행중',
            action: () => stateAction('진행중', item, setRoomList),
          },
          {
            label: '종료됨',
            action: () => stateAction('종료됨', item, setRoomList),
          },
        ],
      },
      {
        label: '방 삭제',
        action: () =>
          deleteAction(handleMenuItemClick, item, setRoomList, setSelectedRoom),
      },
    ]

    handleContextMenu(event, menuItems)
  }

  const current = selectedRoom === item.id ? 'bg-slate-300' : ''

  return (
    <>
      <ListItemModal
        contextMenuState={contextMenuState}
        ref={contextMenuRef}
        item={item}
      />
      <li
        onClick={() => setSelectedRoom(item.id)}
        onContextMenu={(e) => {
          handleRightClick(e)
          setSelectedRoom(item.id)
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
  )
}

export default ListItem
