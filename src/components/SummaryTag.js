import React from 'react'


const SummaryTag = ({name, type, count, clickHandler, isSelected}) => {
  return (
    <span onClick={e => {clickHandler(name, type)}} className={`badge big badge-pill badge-${type} ${isSelected ? 'selected' : ''}`}>{name} <span className='badge count'>{count ? count : 0}</span></span>
  )
}

SummaryTag.propTypes = {}

export default SummaryTag
