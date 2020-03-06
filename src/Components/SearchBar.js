import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {term: ''}
  
  onSubmit = (e) => {

    e.preventDefault()
    this.props.onSearch(this.state.term)

  }
  
  setTerm =  (e) => {

    this.setState({term: e.target.value})

  }

  render() {
    return (
      <div className="ui segment search">
        <form className="ui form" onSubmit={this.onSubmit}> 
        <div className="ui field">
          <label className="ui input">Search Video</label>
          <input className="ui input" value={this.state.term} onChange={this.setTerm}></input>
        </div>
        </form>
      </div>
    )
  }
}
