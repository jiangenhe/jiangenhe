import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Showcase = ({title, description, link}) => {
  return (
    <div className="col-4 col-12-medium">
              <span className="image fit"><img src="images/pic02.jpg"
                                               alt=""/></span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="actions special icons">
        <li><a className="icon" href={link}><FontAwesomeIcon className="xs" icon={faLink} /></a></li>
        <li><a className="icon"><FontAwesomeIcon className="sm" icon={faFilePdf} /></a></li>
        <li><a className="icon"><i className="ai ai-doi sm"/></a> </li>
      </ul>
    </div>
  )
}

Showcase.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

export default Showcase
