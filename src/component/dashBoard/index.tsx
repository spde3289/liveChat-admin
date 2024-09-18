import Item from "./Item";
import UserCountContainer from "./userCount";
import BotUsePieChart from "./botUsePieChart";
import LiveChatCountChart from "./liveChatCountChart";
import mapleUseCount from "@/data/mapleBotuseCount.json";
import mhBotUseCount from "@/data/MHBotUseCount.json";
import chatCount from "@/data/chatCount.json";

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
        <LiveChatCountChart title="채팅방 생성 통계" data={chatCount} />
        <Item height={600}>
          <div>어쩌구 저쩌구8</div>
        </Item>
      </div>
    </>
  );
};

export default DashBoard;
