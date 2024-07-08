import Item from "./item";
import UserCountContainer from "./userCount";
import BotUsePieChart from "./botUsePieChart";
import mapleUseCount from "@/data/mapleBotuseCount.json";
import mhBotUseCount from "@/data/MHBotUseCount.json";

const DashBoard = () => {
  //flex flex-wrap
  return (
    <>
      <div className="p-2 h-full w-full bg-gray-200 grid gap-3 grid-cols-4 scrollBar overflow-y-scroll">
        <UserCountContainer />
        <BotUsePieChart
          title="메이플 봇 명령어 이용 횟수"
          data={mapleUseCount}
        />
        <BotUsePieChart title="몬헌 봇 명령어 이용 횟수" data={mhBotUseCount} />
        <Item height={600}>
          <>
            <div>어쩌구 저쩌구7</div>
            <svg width="300px" height="300px">
              <path
                d="M0,0 50,50 30,230"
                fill="none"
                stroke="#333333"
                strokeWidth="3"
              />
            </svg>
          </>
        </Item>
        <Item height={600}>
          <div>어쩌구 저쩌구8</div>
        </Item>
      </div>
    </>
  );
};

export default DashBoard;
