import UserCount from "./userCount";
import userCountData from "@/data/userCount.json";

const UserCountContainer = () => {
  return (
    <>
      {userCountData.map((el) => (
        <UserCount
          key={el.title}
          title={el.title}
          count={el.count}
          dailyIncrease={el.dailyIncrease}
        />
      ))}
    </>
  );
};

export default UserCountContainer;
