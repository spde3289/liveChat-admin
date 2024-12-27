import { Get, Post, Delete, Put } from './backEnd'
import { isCheckRoomList } from '@/util/isCheckRoomList'
import { RoomListType } from '@/type/room'

export const getRoomList = async () => {
  return Get<RoomListType>('/room')
    .then((res) => {
      const data = res.data
      if (isCheckRoomList(data)) {
        return data
      }
      return null
    })
    .catch((err) => {
      console.log(err)
      return null
    })
}

interface JoinRoomReqBodyType {
  content: string | undefined
  password: string
}

export const JoinRoom = async (data: JoinRoomReqBodyType) => {
  return Post<any>('/room/join', data)
    .then((res: any) => {
      return res.data
    })
    .catch((error) => {
      throw error
    })
}

type RoomType = {
  id: string
  roomName: string
  status: string
  selectMenu: string
}

export const DeleteRoom = async (data: RoomType) => {
  return Delete<any>('/room', {
    data: data,
  })
    .then((res: any) => {
      return res.data
    })
    .catch((error) => {
      throw error
    })
}

export const EditRoom = async (data: RoomType, newStatus: string) => {
  const updatedData = {
    ...data,
    status: newStatus,
  }
  return Put<any>('/room', updatedData)
    .then((res: any) => {
      return res.data
    })
    .catch((error) => {
      throw error
    })
}
