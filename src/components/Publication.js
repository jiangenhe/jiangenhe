import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faFilePdf } from '@fortawesome/free-solid-svg-icons'

const Publication = ({title, venue, year, authors, tags, website, doi, pdf, thumbnail}) => {
  const authorList = authors.split('and').map((author, i, authors) => {
    const [lastName, firstName] = author.replace(' ', '').split(',')
    if (firstName.includes("iangen")) {
      return <span key={firstName} style={{fontWeight:800}}>{firstName} {lastName}{i !== authors.length - 1 && i !== authors.length - 2 ? ',' : ''}</span>
    } else {
      return (i !== authors.length - 1 ? '' : ' and ') + firstName + ' ' + lastName + (i !== authors.length - 1 && i !== authors.length - 2 ? ',' : '')
    }
  })
  const tagList = [...tags].sort((t1, t2) => {
    const colorMap = {"field": 0, "method": 1, "area": 2}
    if (colorMap[t1.type] > colorMap[t2.type]) {
      return 1
    } else {
      return -1
    }
  }).map( t => <Tag name={t.label} type={t.type}/>)
  console.log(authorList);
  return (
      <div className='publication'>
        <div className='thumbnail'>
          {thumbnail !== "" ?
          <span className="image"><img src={`images/${thumbnail}`} alt=""/></span> : ""}
        </div>
        <div className='description'>
          <div className='title'>{title}</div>
          <div> {tagList} </div>
          <div className='author'>{authorList}</div>
          <div className='venue'><span>{year}</span> <span>{venue}</span></div>
          <div>

            {website !== "" ? <a href={website} className="button icon solid small"  target="_blank" rel='noreferrer noopener'>
              <FontAwesomeIcon className="xs" icon={faLink} /> website </a> : ""}
            {pdf !== "" ? <a href={`pdf/${pdf}`} className="button icon solid small"  target="_blank" rel='noreferrer noopener'>
              <FontAwesomeIcon className="xs" icon={faFilePdf} /> pdf </a> : ""}
            {doi !== "" ? <a href={"https://doi.org/" + doi} className="button icon solid small" target="_blank" rel='noreferrer noopener'>
              <i className="ai ai-doi"/> doi </a> : ""}
            <a href={`https://scholar.google.com/scholar?q=${title.replace(" ", "")}`} className="button icon solid small"  target="_blank" rel='noreferrer noopener'>
              <i className="ai ai-google-scholar" /> search </a>

          </div>
        </div>
      </div>
  )
}

Publication.propTypes = {
  title: PropTypes.string,
  venue: PropTypes.string,
  year: PropTypes.string,
  authors: PropTypes.string,
  tags: PropTypes.array
}

Publication.defaultProps = {
  website: "",
  doi: "",
  pdf: "",
  thumbnail: ""
}

export default Publication
