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
        <br />
        <div className='card col-md-6 offset-md-3'>
          <h3 className='text-center'> View HallOfFame Details</h3>
          <div className='card-body'>
            <div className='row'>
              <label>HallOfFame User:&nbsp;</label>
              <div>{this.state.halloffame.user}</div>
            </div>
            <div className='row'>
              <label>HallOfFame Points:&nbsp;</label>
              <div>{this.state.halloffame.points}</div>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default ViewHallOfFameComponent
