import React, { Component } from 'react'
import BibtexParser from 'bibtex-parser-js'
import PropTypes from 'prop-types'
import Publication from '../components/Publication'
import './Publications.css'
import IconButton from '../components/IconButton'
import Tag from '../components/Tag'
import SummaryTag from '../components/SummaryTag'

class Publications extends Component {
  constructor (props) {
    super(props)
    this.state = {data: [], selectedTags: []}
  }

  componentDidMount () {
    fetch("/data/publications.json")
      .then(j => j.json())
      .then(data => this.setState({data: data}))
  }

  render () {
    const publications = this.state.data.map(p => ({...p, ...BibtexParser.toJSON(p.bibtex)[0]}))

    publications.sort((p1, p2) => {
      if (p1.entryTags.YEAR > p2.entryTags.YEAR) return -1
      if (p1.entryTags.YEAR < p2.entryTags.YEAR) return 1

      if (p1.fa > p2.fa) return -1
      if (p1.fa < p2.fa) return 1

      if (p1.type === "J") return -1
      // if (p1.type === "C") return 1
    })

    let tags = {field: {}, method: {}, area: {}}

    for (let i=0; i < publications.length; i++) {
      console.log("aaa", publications[i]);
      const p = publications[i]
      for (let t of p.tags) {
        if (t.type in tags) {
          if (t.label in tags[t.type]){
            tags[t.type][t.label] += 1
          } else {
            tags[t.type][t.label] = 1
          }
        } else {
          tags[t.type] = {}
          tags[t.type][t.label] = 1
        }
      }
    }

    const list = publications.map(p =>
      <Publication key={p.id}
                   title={p.entryTags.TITLE}
                   authors={p.entryTags.AUTHOR}
                   year={p.entryTags.YEAR}
                   venue={p.entryTags.JOURNAL ? p.entryTags.JOURNAL : p.entryTags.BOOKTITLE}
                   tags={p.tags}
                   doi={p.entryTags.DOI}
                   website={p.website}
                   pdf={p.pdf}
                   thumbnail={p.thumbnail}
      /> )
    console.log(tags.field);
    return (

      <section className="main style1">
        <div className="container publications">
          <header className="major special">
            <h2>Publications</h2>
          </header>
          <h3>Research fields</h3> <p><span>{Object.keys(tags["field"]).map(t => <SummaryTag name={t} type="field" count={tags.field[t]}/>)}</span></p>
          <h3>Methods and Methodologies</h3> <p><span>{Object.keys(tags["method"]).map(t => <SummaryTag name={t} type="method" count={tags.method[t]}/>)}</span></p>
          <h3>Areas of interest</h3> <p><span>{Object.keys(tags["area"]).map(t => <SummaryTag name={`${t}`} type="area" count={tags.area[t]}/>)}</span></p>
          <br/>
          {list}
        </div>
      </section>
    )
  }
}

Publications.propTypes = {}

export default Publications
