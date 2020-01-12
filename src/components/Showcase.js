import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Showcase = ({title, description, link, image, pdf, doi, article}) => {
  console.log("pdf", pdf);

  return (
    <div className="col-4 col-12-medium card">
      <a href={article}><span className="image fit"><img src={`images/${image}`}
                                                         alt=""/></span></a>
               <h3><a href={article}>{title}</a></h3>
      <p>{description}</p>
      {/*<ul className="actions special icons">*/}
      {/*  {link ? <li><a className="icon" href={link}><FontAwesomeIcon className="xs" icon={faLink} /></a></li> : ""}*/}
      {/*  {pdf ? <li><a className="icon" href={`pdf/${pdf}`}><FontAwesomeIcon className="sm" icon={faFilePdf} /></a></li> : ""}*/}
      {/*  {doi ? <li><a className="icon" href={"https://doi.org/" + doi}><i className="ai ai-doi sm"/></a> </li> : ""}*/}
      {/*</ul>*/}
    </div>
  )
}

Showcase.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

export default Showcase
