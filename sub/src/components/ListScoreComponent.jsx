import React, { Component } from 'react'
import Score from '../scores/score'

class ListScoreComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scores: []
    }
    this.addScore = this.addScore.bind(this)
    this.editScore = this.editScore.bind(this)
    this.deleteScore = this.deleteScore.bind(this)
  }

  deleteScore (id) {
    Score.deleteScore(id).then(res => {
      this.setState({ scores: this.state.scores.filter(score => score._id !== id) })
    })
  }

  viewScore (id) {
    this.props.history.push(`/view-score/${id}`)
  }

  editScore (id) {
    this.props.history.push(`/add-score/${id}`)
  }

  componentDidMount () {
    Score.getScores().then((res) => {
      this.setState({ scores: res.data })
    })
  }

  addScore () {
    this.props.history.push('/add-score/_add')
  }

  render () {
    return (
      <div>
        <h2 className='text-center'>Scores List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addScore}>Add Score</button>
        </div>
        <br />
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Score User</th>
                <th>Score Points</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
              this.state.scores.map(
                score =>
                  <tr key={score._id}>
                    <td>{score.user}</td>
                    <td>{score.points}</td>
                    <td>
                      <button onClick={() => this.editScore(score._id)} className='btn btn-info'>Update</button>
                      <button style={{ marginLeft: '10px' }} onClick={() => this.deleteScore(score._id)} className='btn btn-danger'>Delete</button>
                      <button style={{ marginLeft: '10px' }} onClick={() => this.viewScore(score._id)} className='btn btn-info'>View</button>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListScoreComponent
