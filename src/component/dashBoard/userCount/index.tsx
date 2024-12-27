import userCountData from '@/data/userCount.json'
import UserCount from './UserCount'

const UserCountContainer = () => {
  return (
    <>
      {userCountData.map((el) => (
        <UserCount
          key={el.title}
          title={el.title}
          count={el.count}
          dailyIncrease={el.weeklyIncrease}
        />
      ))}
    </>
  )
}

export default UserCountContainer
