import {
  useContext,
  createContext,
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Room = string

// Context의 타입 정의
interface RoomContextType {
  selectedRoom: Room | null;
  setSelectedRoom: Dispatch<SetStateAction<Room | null>>;
}

// 초기 값 설정
const RoomContext = createContext<RoomContextType | undefined>(undefined);

interface RoomProviderProps {
  children: ReactNode;
}

export const RoomProvider = ({ children }: RoomProviderProps) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // useMemo로 값 메모이제이션
  const value = useMemo(
    () => ({ selectedRoom, setSelectedRoom }),
    [selectedRoom]
  );

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

export function useRoomContext(): RoomContextType {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoomContext must be used within a RoomProvider");
  }
  return context;
}

export default useRoomContext;
