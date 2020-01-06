import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'

class Spotlight extends Component {
  render () {
    const {title, description, link, doi, pdf} = this.props.data
    const news = this.props.news
    return (
      <section className="main style1">
        <div className="container">
          <div className="row gtr-150">
            <div className="col-3 col-12-medium">
              <header>
                <h2>{ title }</h2>
              </header>
              <ul className="actions icons special" style={{justifyContent:"left"}}>
                <li><a className="icon" href={link}><FontAwesomeIcon className="xs" icon={faLink} /></a></li>
                <li><a className="icon"><FontAwesomeIcon className="sm" icon={faFilePdf} /></a></li>
                <li><a className="icon"><i className="ai ai-doi sm"/></a> </li>
              </ul>
              <p>{ description }</p>

            </div>
            <div className="col-5 col-12-medium imp-medium">
              <span className="image fit"><img src="images/pic01.jpg"
                                               alt=""/></span>
            </div>
            <div className="col-4 col-12-medium">
              <header>
                <h2>News </h2>
              </header>
              <ul>
                {news.map(n => <li key={n.date}>[{}]{n.text}</li>)}
              </ul>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

Spotlight.propTypes = {}

export default Spotlight
