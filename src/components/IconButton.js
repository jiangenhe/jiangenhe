import React from 'react'
import PropTypes from 'prop-types'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LINK = "LINK"
export const PDF = "PDF"
export const BIBTEX = "BIBTEX"
export const DOI = "DOI"

const IconButton = ({link, buttonName}) => {
  return (
    <a href={link} className="button icon solid small"><FontAwesomeIcon className="xs" icon={faLink} /> {buttonName}</a>
  )
}

IconButton.propTypes = {}

export default IconButton
