import React, {useContext} from "react";
import UserItem from "./Useritem";
import Spinner from '../Layout/Spinner'
import GithubContext from '../../Context/Github/githubContext'


//users and loading pass from app.js
const Users = () => {
   const githubContext = useContext(GithubContext);

   const {loading, users} = githubContext


  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {/*the actuall users coming from the axios.get fetching in the app.js users array comes from the app.js state*/}
        {users.map((item) => (
          <UserItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};



export default Users;
