import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Item from "../Item";

interface LiveChatCountChartProps {
  title: string;
  data: any[];
}

const LiveChatCountChart = ({ title, data }: LiveChatCountChartProps) => {
  return (
    <Item height={600}>
      <>
        <div className="w-full h-full p-3 pr-5">
          <div className="text-xl font-bold">{title}</div>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              width={600}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 70,
              }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="진행중" stackId="a" barSize={20} fill="#8884d8" />
              <Bar dataKey="종료됨" stackId="a" barSize={20} fill="#413ea0" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </>
    </Item>
  );
};

export default LiveChatCountChart;
