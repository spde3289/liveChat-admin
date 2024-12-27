import { DeleteRoom, EditRoom } from '@/fetch/roomFatch'
import { RoomListType } from '@/type/room'

type StateType = '진행중' | '종료됨'
type ItemType = {
  id: string
  roomName: string
  status: string
  selectMenu: string
}
type SetRoomListType = React.Dispatch<React.SetStateAction<RoomListType>>

export const stateAction = (
  state: StateType,
  item: ItemType,
  setRoomList: SetRoomListType,
) => {
  if (item.status != state) {
    EditRoom(item, state).then((response) => {
      setRoomList(response)
    })
  }
}

export const deleteAction = (
  handleMenuItemClick: any,
  item: ItemType,
  setRoomList: SetRoomListType,
  setSelectedRoom: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  handleMenuItemClick(() => {
    console.log('Rename action is triggering')
    DeleteRoom(item).then((response) => {
      setRoomList(response)
    })
    setSelectedRoom(null)
  })
}
