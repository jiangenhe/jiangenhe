import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PDFViewer from '../components/PDFViewer'
import PDFJSBackend from '../backends/pdfjs';
class CV extends Component {

  render () {

    return (
      <div>
        <section className="main style1" >
          <div className="container">
            <header className="major special">
              <h2>Curriculum Vitae</h2>
            </header>
            <PDFViewer backend={PDFJSBackend}
                       src='/pdf/CV.pdf'/>
          </div>
        </section>
      </div>
    )
  }
}

CV.propTypes = {}

export default CV
