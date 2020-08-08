import React from 'react'
import PropTypes from 'prop-types' //Type jacking will tell if we need other type prop...
import {Link} from 'react-router-dom' //prevent Total refresh when moving to other page and keep the state the without refreshing it

 //distructure the props inside our () , props coming from app.js
 const Navbar = ({icon,title}) => {
              return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}/> {title}
                    </h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
            </nav>
        )
    
}

   Navbar.defaultProps = {
      title: 'Github Finder',
      icon: 'fab fa-github'
  };

   Navbar.propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
  }

export default Navbar
