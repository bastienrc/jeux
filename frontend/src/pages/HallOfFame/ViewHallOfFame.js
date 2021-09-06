import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HallOfFameService from './ApiHallOfFame'

class ViewHallOfFameComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      halloffame: {}
    }
  }

  componentDidMount () {
    HallOfFameService.getHallOfFameById(this.state.id).then(res => {
      this.setState({ halloffame: res.data })
    })
  }

  render () {
    return (
      <Layout>
        <h3 className='text-center'>HallOfFame Details</h3>
        <div className='card-body'>
          <p>Player: {this.state.halloffame.player}</p>
          <p>Scores: {this.state.halloffame.score}</p>
        </div>
      </Layout>
    )
  }
}

export default ViewHallOfFameComponent
