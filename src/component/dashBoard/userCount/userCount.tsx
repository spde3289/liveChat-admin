import Item from "../item";

interface UserCountProps {
  title: string;
  count: number;
  dailyIncrease: number;
}

const UserCount = ({ title, count, dailyIncrease }: UserCountProps) => {
  const dailyIncreaseMsg =
    dailyIncrease > 0 ? `↑ ${dailyIncrease}` : `- ${dailyIncrease}`;

  return (
    <>
      <Item height={100}>
        <>
          <div className=" h-full p-3">
            <div className="text-base mb-1">{title}</div>
            <div className="flex items-center justify-between pl-3">
              <div className="text-3xl">{count}</div>
              <div className="text-sm text-right mr-3">
                <div className="text-gray-500">일일 증가량</div>
                <div
                  className={`${
                    dailyIncrease > 0 ? "text-red-600" : "text-black"
                  }`}
                >
                  {dailyIncreaseMsg}
                </div>
              </div>
            </div>
          </div>
        </>
      </Item>
    </>
  );
};

export default UserCount;
