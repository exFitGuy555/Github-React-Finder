import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../Layout/Spinner'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GithubContext from '../../Context/Github/githubContext'

 const User = ({match}) =>  {
 const githubContext = useContext(GithubContext)

         const {
             getUser,
             loading,
             user,
             repos,
             getUserRepos
         } = githubContext

    //useEffect will be fire every time the componenet update , so for us to avoid endless loop, will pass an empty array after the methods we need to run. 
    useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    //if well keep the [] empty there will be an error telling us we have something missing , to avoid that well code the comment below
    //eslint-disable-next-line
    }, [])

     
        //extracting data coming from  the res.data we fetching
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,  
            company,
            hireable,
            } = user 

            if(loading) return <Spinner />
            return  (
            
            <Fragment>
                    <Link to="/" className='btn btn-light' >
                    Back to search for
                    </Link>
                
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger" />}
                   
                   <div className="card grid-2">
                       <div className="all-center">

                           <img src={avatar_url} className='round-img' style={{
                               width: '150px'
                           }} alt=""/>
                           <h1>{name}</h1>
                           <p>Location: {location}</p>
                       </div>
                       <div>
                           {bio && ( <Fragment>
                               <h3>Bio</h3>
                               <p>{bio}</p>
                               </Fragment>
                               )}
                         <a href={html_url} className='btn btn-dark my-1'>Visit GitHub Profile</a>
                         <ul>
                             <li>
                                 {login && ( 
                                     <Fragment>
                                         <strong>Username: </strong> {login}
                                     </Fragment>
                                 )}
                             </li>
                             <li>
                                 {company && ( 
                                     <Fragment>
                                         <strong>Company: </strong> {company}
                                     </Fragment>
                                 )}
                             </li>
                             <li>
                                 {blog && ( 
                                     <Fragment>
                                         <strong>Website: </strong> {blog}
                                     </Fragment>
                                 )}
                             </li>
                         </ul>
                       </div>
                   </div>

                   <div className="card text-center">
                       <div className="badge badge-primary">Followers: {followers}</div>
                       <div className="badge badge-success">Followers: {following}</div>
                       <div className="badge badge-dark">Public Repos: {public_repos}</div>
                   </div>
             
                     <Repos repos={repos} />
            </Fragment>
            )
}


export default User


//getUser profile process : 
//we want to grab the login (username) from the url , so well call this.props.getUser above int he componenetDidMount,we got it from line 86 in the app.js which will get pass into User compo. because if will take a look at User comp. well see its calling to the getUser method and the getUser method recive a username (login), and then it gonna send the get req. and fill the user state with the res.data, and then we passing the user state back in the User comp. indie the Route we created at the app.js down below and then we have access to user data