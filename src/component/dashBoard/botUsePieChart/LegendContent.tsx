import { BsSuitDiamondFill } from 'react-icons/bs'
import { LegendProps } from 'recharts'

interface LegendContentProps {
  payload?: LegendProps['payload']
}

const LegendContent = ({ payload }: LegendContentProps) => {
  if (!payload) return null
  console.log(payload)
  return (
    <ul>
      {payload.map((entry, index) => (
        <li
          className="text-sm mb-1 flex items-center justify-between"
          key={`item-${index}`}
        >
          <span className={`w-16 mr-2 flex items-center`}>
            <BsSuitDiamondFill className="mr-1" fill={entry.color} />
            {entry.value}
            <span className="w-full text-right flex-1 ">:</span>
          </span>
          <div className="ml-2 w-fit text-right">{entry.payload?.value}</div>
        </li>
      ))}
    </ul>
  )
}

export default LegendContent
