import Item from "./item";
import UserCountContainer from "./userCount";
import MapleBotChart from "./mapleBotChart";

const DashBoard = () => {
  //flex flex-wrap
  return (
    <>
      <div className="p-2 h-full w-full bg-gray-200 grid gap-3 grid-cols-4 scrollBar overflow-y-scroll">
        <UserCountContainer />
        <MapleBotChart />
        <Item height={500}>
          <div>어쩌구 저쩌구6</div>
        </Item>
        <Item height={600}>
          <div>어쩌구 저쩌구7</div>
        </Item>
        <Item height={600}>
          <div>어쩌구 저쩌구8</div>
        </Item>
      </div>
    </>
  );
};

export default DashBoard;
