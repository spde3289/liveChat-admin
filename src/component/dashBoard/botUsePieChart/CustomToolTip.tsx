import { memo } from 'react'

const CustomTooltip = (props: any) => {
  const { payload } = props

  return (
    <div className="p-2 ani bg-black bg-opacity-65 w-fit">
      <div className="text-white text-sm ">
        {payload?.[0]?.payload?.name} {payload?.[0]?.value}
      </div>
    </div>
  )
}

export default memo(CustomTooltip)
