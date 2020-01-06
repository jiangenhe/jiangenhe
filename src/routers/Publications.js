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
    this.state = {tags:{field: [], method: [], area: []}, selected: {}, publications: []}
    this.tagClickHandler = this.tagClickHandler.bind(this)
  }

  componentDidMount () {
    fetch("/data/publications.json")
      .then(j => j.json())
      .then(data => {
        let publications = data.map(p => ({...p, ...BibtexParser.toJSON(p.bibtex)[0]}))
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

        for(let aspect in tags) {
          tags[aspect] = Object.keys(tags[aspect]).map(t => ({label: t, count: tags[aspect][t]}))
            .sort((t1, t2) => {
              if (t1.count < t2.count) {
                return 1
              } else {
                return -1
              }
            })
        }
        this.setState({"tags":tags, "publications":publications})
        console.log("tags", tags);
      })
  }

  tagClickHandler (label, type) {
    if (label in this.state.selected) {
      const s = Object.assign({}, this.state.selected)
      delete s[label]
      this.setState({selected: s})
    } else {
      let added = {}
      added[label] = type
      this.setState({selected: {...this.state.selected, ...added}})
    }
  }

  render () {
    const {publications, selected, tags} = this.state;

    const selectedLength = Object.keys(selected).length

    const anySelected = selectedLength > 0

    let toShowPublications = publications.filter(p => {
      if (anySelected) {
        return p.tags.filter(t => t.label in selected).length === selectedLength
      } else {
        return 1
      }
    })


    if (Object.keys(selected).length > 0) {
      toShowPublications = toShowPublications.map(p => {
        p.isSelected = p.tags.filter(t => t.label in selected).length > 0
        return p
      })
    }

    let tagCount = {field: {}, method: {}, area: {}}

    for (let i=0; i < toShowPublications.length; i++) {
      const p = toShowPublications[i]
      const isSelected = p.tags.filter(t => t.label in selected).length > 0
      for (let t of p.tags) {
        if (t.type in tagCount) {
          if (t.label in tagCount[t.type]){
            tagCount[t.type][t.label] += anySelected ? (isSelected ? 1 : 0) : 1
          } else {
            tagCount[t.type][t.label] = anySelected ? (isSelected ? 1 : 0) : 1
          }
        } else {
          tagCount[t.type] = {}
          tagCount[t.type][t.label] = anySelected ? (t.label in selected ? 1 : 0) : 1
        }
      }
    }

    const list = toShowPublications.map(p =>
      <Publication key={p.id}
                   title={p.entryTags.TITLE}
                   authors={p.entryTags.AUTHOR}
                   year={p.entryTags.YEAR}
                   venue={p.entryTags.JOURNAL ? p.entryTags.JOURNAL : p.entryTags.BOOKTITLE}
                   tags={p.tags}
                   selected={selected}
                   doi={p.entryTags.DOI}
                   website={p.website}
                   pdf={p.pdf}
                   thumbnail={p.thumbnail}
      /> )

    return (
      <section className="main style1">
        <div className="container publications">
          <header className="major special">
            <h2>Publications</h2>
          </header>
          <h3>Research fields</h3> <p><span>{tags.field.map(t => <SummaryTag key={t.label} name={t.label} type="field" count={tagCount.field[t.label]} clickHandler={this.tagClickHandler} isSelected={t.label in selected}/>)}</span></p>
          <h3>Methods and Methodologies</h3> <p><span>{tags.method.map(t => <SummaryTag key={t.label} name={t.label} type="method" count={tagCount.method[t.label]} clickHandler={this.tagClickHandler} isSelected={t.label in selected}/>)}</span></p>
          <h3>Areas of interest</h3> <p><span>{tags.area.map(t => <SummaryTag key={t.label} name={t.label} type="area" count={tagCount.area[t.label]} clickHandler={this.tagClickHandler} isSelected={t.label in selected}/>)}</span></p>
          <br/>
          {list}
        </div>
      </section>
    )
  }
}

Publications.propTypes = {}

export default Publications
