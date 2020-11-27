import React, { Component } from 'react'
import ScoreService from '../scores/score'

class ViewScoreComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      score: {}
    }
  }

  componentDidMount () {
    ScoreService.getScoreById(this.state.id).then(res => {
      this.setState({ score: res.data })
    })
  }

  render () {
    return (
      <div>
        <br />
        <div className='card col-md-6 offset-md-3'>
          <h3 className='text-center'> View Score Details</h3>
          <div className='card-body'>
            <div className='row'>
              <label>Score User:&nbsp;</label>
              <div>{this.state.score.user}</div>
            </div>
            <div className='row'>
              <label>Score Points:&nbsp;</label>
              <div>{this.state.score.points}</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ViewScoreComponent
