import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

class Footer extends Component {
  render () {
    return (
      <section id="footer">
        <ul className="icons">
          <li><a href="https://twitter.com/jiangenhe" className="icon brands alt"><FontAwesomeIcon className="fa-lg" icon={faTwitter} /></a></li>
          <li><a href="https://github.com/jiangenhe" className="icon brands alt"><FontAwesomeIcon className="fa-lg" icon={faGithub} /></a></li>
          <li><a href="mailto:jiangen.he@drexel.edu" className="icon brands alt"><FontAwesomeIcon className="fa-lg" icon={faEnvelope} /></a></li>
          <li><a href="https://orcid.org/0000-0002-3950-6098" className="icon brands alt"><i className="ai ai-orcid ai-lg"/></a></li>
          <li><a href="https://publons.com/researcher/1315783/jiangen-he/" className="icon brands alt"><i className="ai ai-publons ai-lg"/></a></li>
          <li><a href="https://www.researchgate.net/profile/Jiangen_He2" className="icon brands alt"><i className="ai ai-researchgate ai-lg"/></a></li>
          <li><a href="https://scholar.google.com/citations?user=Wq1GMM0AAAAJ&hl=en" className="icon brands alt"><i className="ai ai-google-scholar ai-lg"/></a></li>
        </ul>
        <ul className="copyright">
          <li>&copy; Jiangen He</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </section>
    )
  }
}

Footer.propTypes = {}

export default Footer
