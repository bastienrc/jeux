import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { Table, Title, TitleName, TitleAdd } from '../../components/Table'
import HallOfFame from './ApiHallOfFame'

class ListHallOfFame extends Component {
  constructor (props) {
    super(props)

    this.state = {
      halloffames: []
    }
    this.handleAddHallOfFame = this.handleAddHallOfFame.bind(this)
    this.editHallOfFame = this.editHallOfFame.bind(this)
    this.deleteHallOfFame = this.deleteHallOfFame.bind(this)
  }

  deleteHallOfFame (id) {
    HallOfFame.deleteHallOfFame(id).then(res => {
      this.setState({ halloffames: this.state.halloffames.filter(halloffame => halloffame._id !== id) })
    })
  }

  viewHallOfFame (id) {
    this.props.history.push(`/view-halloffame/${id}`)
  }

  editHallOfFame (id) {
    this.props.history.push(`/add-halloffame/${id}`)
  }

  componentDidMount () {
    HallOfFame.getHallOfFames().then((res) => {
      this.setState({ halloffames: res.data })
    })
  }

  handleAddHallOfFame () {
    this.props.history.push('/add-halloffame/_add')
  }

  render () {
    return (
      <Layout pageTitle='Hall Of Fame'>
        <Title>
          <TitleName>Best Scores</TitleName>
          <TitleAdd onClick={this.handleAddHallOfFame}>+</TitleAdd>
        </Title>

        <Table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.halloffames.sort((a, b) => b.scores - a.scores).map(
              halloffame =>
                <tr key={halloffame._id}>
                  <td>{halloffame.player}</td>
                  <td>{halloffame.score}</td>
                  <td>
                    <button onClick={() => this.editHallOfFame(halloffame._id)} className='btn btn-info'>Update</button>
                    <button style={{ marginLeft: '10px' }} onClick={() => this.deleteHallOfFame(halloffame._id)} className='btn btn-danger'>Delete</button>
                    <button style={{ marginLeft: '10px' }} onClick={() => this.viewHallOfFame(halloffame._id)} className='btn btn-info'>View</button>
                  </td>
                </tr>
            )
          }
          </tbody>
        </Table>
      </Layout>
    )
  }
}

export default ListHallOfFame
