import React from 'react'


const Tag = ({name, type, isSelected}) => {
  return (
    <span className={`badge badge-pill badge-${type}${isSelected ? ' selected':''}`}>{name}</span>
  )
}

Tag.propTypes = {}

export default Tag
