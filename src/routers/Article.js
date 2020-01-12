import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import ReactMarkDown from 'react-markdown'
import "./Article.css"

const Article = (props) => {
  let {id} = useParams()

  const request = new XMLHttpRequest();
  request.open('GET', `../article/${id}.md`, false);  // `false` => synchronous request
  request.send(null);
  let toShow = "The article you were looking for doesn't exist!"
  if (request.status === 200) {
    toShow = request.responseText
  }

  return (
    <section className="main style1">
      <div className="container article">
      <ReactMarkDown source={toShow} escapeHtml={false}/>
      </div>
    </section>
  )

}

Article.propTypes = {}

export default Article

