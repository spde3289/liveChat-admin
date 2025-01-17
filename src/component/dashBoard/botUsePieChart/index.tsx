import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Item from '../Item'
import CustomTooltip from './CustomToolTip'
import LegendContent from './LegendContent'

interface PieChartProps {
  title: string
  data: { name: string; value: number; fill: string }[]
}

const BotUsePieChart = ({ title, data }: PieChartProps) => {
  return (
    <Item height={500}>
      <>
        <div className="w-full h-full p-3 pr-5">
          <div className="text-xl font-bold">{title}</div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
              />
              <Legend
                iconSize={10}
                content={<LegendContent />}
                iconType="diamond"
                layout="centric"
                verticalAlign="middle"
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </>
    </Item>
  )
}

export default BotUsePieChart
