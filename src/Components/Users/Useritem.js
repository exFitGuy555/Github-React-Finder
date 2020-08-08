import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



  //setting the distructure inside our (), and pointing to the item we loop through down below in users.map
  const UserItem = ({item: {login, avatar_url}}) => {
        return (
            <div className="card text-center">
                 <img className="round-img" src={avatar_url} style={{ width: '60px'}}alt=""/>
                 <h3>{login}</h3>
                 <div>
                     <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                 </div>
            </div> 
        )
}

//checking the props we receiving
UserItem.propTypes ={
     item: PropTypes.object.isRequired,


    
}

export default UserItem
