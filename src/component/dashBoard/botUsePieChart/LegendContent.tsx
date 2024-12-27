import { memo } from 'react'
import { BsSuitDiamondFill } from 'react-icons/bs'

const LegendContent = (props: any) => {
  const { payload } = props

  return (
    <ul>
      {payload.map((entry: any, index: any) => (
        <li className="text-sm mb-1 flex items-center" key={`item-${index}`}>
          <BsSuitDiamondFill className="mr-2" fill={entry.color} />
          {entry.value}
        </li>
      ))}
    </ul>
  )
}

export default memo(LegendContent)
