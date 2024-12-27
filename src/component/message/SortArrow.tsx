import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { sortType } from './RoomList'

interface SortArrowProps {
  name: string
  sort: sortType
}

const SortArrow = ({ name, sort }: SortArrowProps) => {
  const currentIndex = sort.name === name

  return (
    <div className="ml-1">
      {sort.state === 'up' ? (
        <IoMdArrowDropup color={currentIndex ? 'black' : 'gray'} />
      ) : (
        <IoMdArrowDropdown color={currentIndex ? 'black' : 'gray'} />
      )}
    </div>
  )
}
export default SortArrow
