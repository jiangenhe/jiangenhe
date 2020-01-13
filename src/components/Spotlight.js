import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'

class Spotlight extends Component {
  render () {
    const {title, description, link, doi, pdf} = this.props.data
    const news = this.props.news
    return (
      <section className="main style1">
        <div className="container">
          <div className="row gtr-150">
            <div className="col-3 col-12-medium card">
              <header>
                <h2>{ title }</h2>
              </header>
              {/*<ul className="actions icons special" style={{justifyContent:"left"}}>*/}
              {/*  {link ? <li><a className="icon" href={link}><FontAwesomeIcon className="xs" icon={faLink} /></a></li> : ""}*/}
              {/*  {pdf ? <li><a className="icon"><FontAwesomeIcon className="sm" icon={faFilePdf} /></a></li> : ""}*/}
              {/*  <li><a className="icon"><i className="ai ai-doi sm"/></a> </li>*/}
              {/*</ul>*/}
              <p style={{color: '#888888'}}><i>To be available soon</i></p>
              <p className='description'>{ description }</p>

            </div>
            <div className="col-5 col-12-medium imp-medium">
              <span className="image fit"><img src="images/spotlight.png"
                                               alt=""/></span>
            </div>
            <div className="col-4 col-12-medium card">
              <header>
                <h2>News </h2>

              </header>
              {/*style={{listStyleType: 'none', margin: 0, padding: 0}}*/}
              <ul>
                {news.map(n => <li style={{padding:0}} key={n.date}>
                  <span className="date">{n.date}</span>
                  {n.link ? <a href={n.link}>{ReactHtmlParser(n.text)}</a> : ReactHtmlParser(n.text)}
                </li>)}
              </ul>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

Spotlight.propTypes = {}

export default Spotlight
