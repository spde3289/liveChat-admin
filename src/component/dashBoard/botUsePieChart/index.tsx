import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from "recharts";
import { BsSuitDiamondFill } from "react-icons/bs";
import Item from "../item";

interface PieChartProps {
  title: string;
  data: any[];
}

const BotUsePieChart = ({ title, data }: PieChartProps) => {
  return (
    <Item height={500}>
      <>
        <div className="w-full h-full p-3 pr-5">
          <div className="text-xl font-bold">{title}</div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                label={renderCustomizedLabel}
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

const RADIAN = Math.PI / 180;

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, value, fill } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 25;
  const ey = my;

  return (
    <>
      <svg>
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
      </svg>{" "}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {value}
      </text>
    </>
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

export default BotUsePieChart;
