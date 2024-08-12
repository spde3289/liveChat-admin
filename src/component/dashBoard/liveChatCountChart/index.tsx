import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Item from "../item";

const data = [
  { name: "MonsterHunter", 진행중: 2, 종료됨: 1 },
  { name: "MapleStory", 진행중: 3, 종료됨: 2 },
];

const LiveChatCountChart = () => {
  return (
    <Item height={600}>
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
    </Item>
  );
};

export default LiveChatCountChart;
