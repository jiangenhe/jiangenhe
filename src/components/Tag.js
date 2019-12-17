import React from 'react'


const Tag = ({name, type}) => {
  return (
    <span className={'badge badge-pill badge-' + type}>{name}</span>
  )
}

Tag.propTypes = {}

export default Tag
