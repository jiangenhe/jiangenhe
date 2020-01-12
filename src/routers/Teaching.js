import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Teaching extends Component {
  render () {
    return (
      <section className="main style1">
        <div className="container publications">
          <header className="major special">
            <h2>Teaching</h2>
          </header>
          <h3>Instructor</h3>
      <ul style={{lineHeight:"1.8em"}}>
        <li>INFO 210 Database Management System (Undergraduate Course), Drexel University, 2019.</li>

        <li>INFO 600 Web Systems and Architecture (Online and Face-to-face Sessions, Graduate Course), Drexel University, 2018.</li>
      </ul>
          <h3>Teaching Assistant</h3>
        <ul style={{lineHeight:"1.8em"}}>

          <li>INFO 152 Web Systems and Services II, Teaching Assistant, Drexel University, 2019.</li>
          <li>INFO 210 Database Management System, Teaching Assistant, Drexel University, 2019.</li>

          <li>CI 103 Computing and Informatics Design III, Lab Instructor, Drexel University, 2016.</li>

            <li>CI 102 Computing and Informatics Design II, Lab Instructor, Drexel University, 2016.</li>

              <li>CI 101 Computing and Informatics Design I, Lab Instructor, Drexel University, 2015.</li>

                <li>INFO 320 Server Technology I, Teaching Assistant, Drexel University, 2015.</li>
                <li>INFO 520 Social Context of Information Professions, Teaching Assistant, Drexel University, 2015.</li>
      </ul>

          <h3>Teaching Training</h3>
          <ul style={{lineHeight:"1.8em"}}>
            <li>STEM 511: Foundation in Evidence-based Pedagogy, Drexel University, 2018</li>
            <li>International Teaching Assistance Training Program, Drexel University, 2014</li>
          </ul>
        </div>
      </section>
    )
  }
}

Teaching.propTypes = {}

export default Teaching
