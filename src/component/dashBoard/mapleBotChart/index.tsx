import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { BsSuitDiamondFill } from "react-icons/bs";
import Item from "../item";

const data = [
  { name: "보스", value: 43, fill: "#a4de6c" },
  { name: "검색", value: 38, fill: "#83a6ed" },
];

const MapleBotChart = () => {
  return (
    <Item height={500}>
      <>
        <div className="w-full h-full p-3 pr-5">
          <div className="text-xl font-bold">메이플 봇 명령어 이용 횟수</div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
              />
              <Legend
                iconSize={10}
                content={item}
                iconType="diamond"
                layout="centric"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </>
    </Item>
  );
};

const item = (props: any) => {
  const { payload } = props;

  return (
    <ul>
      {payload.map((entry: any, index: any) => (
        <li className="text-sm mb-1 flex items-center" key={`item-${index}`}>
          <BsSuitDiamondFill className="mr-2" fill={entry.color} />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default MapleBotChart;