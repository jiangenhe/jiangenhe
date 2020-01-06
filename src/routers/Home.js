import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Showcases from '../components/Showcases'
import Spotlight from '../components/Spotlight'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {data: {showcase: [], spotlight: {}, news: []}}
  }

  componentDidMount () {
    fetch("/data/home.json")
      .then(j => j.json())
      .then(data => this.setState({data: data}))
  }

  render () {
    let {showcases, spotlight, news} = this.state.data;
    console.log(showcases);
    return (
      <div>
        <Showcases data={showcases}/>
        <Spotlight data={spotlight} news={news}/>
      </div>
    )
  }
}

export default Home
