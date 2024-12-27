import { ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
interface MenuItemProps {
  children: ReactElement
  path: string
}

const MenuItem = ({ children, path }: MenuItemProps) => {
  const location = useLocation()

  const currentIndex =
    location.pathname.replace('/', '') === path.replace('/', '')
      ? 'bg-[#616570] text-white'
      : 'text-slate-500'

  return (
    <li className={` ${currentIndex} flex h-16 items-center w-full `}>
      <Link
        to={path}
        className="flex w-full h-full justify-center items-center  "
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem
