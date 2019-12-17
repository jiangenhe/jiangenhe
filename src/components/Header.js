import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Header extends Component {
  render () {
    let isHome = this.props.home
    return (
      <section id="header">
        <nav id="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Publications">Publications</Link></li>
            <li><Link to="/Teaching">Teaching</Link></li>
            <li><Link to="/CV">CV</Link></li>
          </ul>
        </nav>
        {isHome ? <div>
        <div className="author__avatar">
          <img
          src="../images/header.png"
          className="author__avatar" alt="Your Sidebar Name" />
        </div>
        <h1><strong> Jiangen He </strong></h1>
        <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br/>
          lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        </div> : <div/>}
      </section>
    )
  }
}

Header.propTypes = {
  home: PropTypes.bool
}

export default Header
