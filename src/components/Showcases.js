import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Showcase from './Showcase'

class Showcases extends Component {
  render () {
    const data = this.props.data
    const showCases = data ? data.map(
      (datum) => <Showcase key={datum.title} {...datum}/>
      ) :[]
    return (
      <section className="main style1 special">
        <div className="container">
          <header className="major">
            <h2>Recent Work</h2>
          </header>
          <div className="row gtr-150">
            {showCases}
          </div>
        </div>
      </section>
    )
  }
}

Showcases.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default Showcases
