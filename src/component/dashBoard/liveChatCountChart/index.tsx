import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Item from '../Item'

type dateType = { name: string; 진행중: number; 종료됨: number }

interface LiveChatCountChartProps {
  title: string
  data: dateType[]
}
const LiveChatCountChart = ({ title, data }: LiveChatCountChartProps) => {
  const domainMax = (value: number) => {
    return value + value / 5
  }

  return (
    <Item height={600}>
      <>
        <div className="w-full h-full p-3 pr-5">
          <div className="text-xl font-bold">{title}</div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 30,
                bottom: 30,
              }}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                scale="linear"
                domain={[0, domainMax]}
                tickFormatter={(tick) => (tick % 1 === 0 ? tick : '')}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="진행중"
                minPointSize={5}
                barSize={20}
                fill="#8884d8"
              />
              <Bar
                dataKey="종료됨"
                minPointSize={5}
                barSize={20}
                fill="#413ea0"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
    </Item>
  )
}

export default LiveChatCountChart
