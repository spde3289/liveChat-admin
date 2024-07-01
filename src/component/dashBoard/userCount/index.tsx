import UserCount from "./userCount";

const UserCountContainer = () => {
  return (
    <>
      <UserCount title="메이플 봇 이용 수" count={50} dailyIncrease={0} />
      <UserCount title="몬헌 봇 이용 수" count={50} dailyIncrease={1} />
      <UserCount title="문의 방문자 수" count={250} dailyIncrease={1} />
      <UserCount title="블로그 방문자 수" count={150} dailyIncrease={1} />
    </>
  );
};

export default UserCountContainer;
