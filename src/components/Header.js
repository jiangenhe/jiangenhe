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
        <div className='container'>
        <nav id="nav">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/Publications">PUBLICATIONS</Link></li>
            <li><Link to="/Teaching">TEACHING</Link></li>
            <li><Link to="/CV">CV</Link></li>
          </ul>
        </nav>
        {isHome ? <div>
        <div className="author__avatar">
          <img
          src="../images/header.png"
          className="author__avatar" alt="Jiangen He" />
        </div>
        <h1><strong> Jiangen He </strong></h1>
        <p>I am a PhD candidate in Information Science at Drexel University. <br/>
          My current research focus on visual analytics, data-driven predictions, and critical information measurement in scientific development and studies of how socialness in artificial intelligence affects people’s information and decision-making behavior.</p>
        </div> : <div/>}
        </div>
      </section>
    )
  }
}

Header.propTypes = {
  home: PropTypes.bool
}

export default Header
