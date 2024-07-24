import UserProfileCard from './UserProfileCard.jsx';

const UserCard = ({ user, setUser }) =>{
  return (
    <div>
      <UserProfileCard user={user} setUser={setUser}></UserProfileCard>
    </div>
  )
}

export default UserCard