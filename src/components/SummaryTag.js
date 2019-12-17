import React from 'react'


const SummaryTag = ({name, type, count, clickHandler}) => {
  return (
    <span onClick={e => {clickHandler(name, type)}} className={'badge big badge-pill badge-' + type}>{name} <span className='badge count'>{count}</span></span>
  )
}

SummaryTag.propTypes = {}

export default SummaryTag
