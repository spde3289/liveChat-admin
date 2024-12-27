import { CreateRouterProvider } from '@/routes'
import { RoomProvider } from './context/useRoomContext'

function App() {
  return (
    <>
      <RoomProvider>
        <CreateRouterProvider />
      </RoomProvider>
    </>
  )
}

export default App
