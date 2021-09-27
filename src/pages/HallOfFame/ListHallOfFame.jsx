import { useState, useContext, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import Auth from '../../contexts/Auth'
import Layout from '../../components/Layout'
import { Table, Title, TitleName } from '../../components/Table'
import HallOfFame from './ApiHallOfFame'

function ListHallOfFame () {
  const { isAuthenticated } = useContext(Auth)
  const [hallOfFames, setHallOfFames] = useState([])
  // const history = useHistory()

  useEffect(() => HallOfFame.getHallOfFames().then((res) => {
    setHallOfFames(res.data)
  }), [])

  function deleteHallOfFame (id) {
    HallOfFame.deleteHallOfFame(id).then(res => {
      setHallOfFames(hallOfFames.filter(halloffame => halloffame._id !== id))
    })
  }

  // function editHallOfFame (id) {
  //   history.push(`/add-halloffame/${id}`)
  // }

  // function handleAddHallOfFame () {
  //   history.push('/add-halloffame/_add')
  // }

  return (
    <Layout pageTitle='Hall Of Fame'>
      <Title>
        <TitleName>Meilleurs Scores</TitleName>
      </Title>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Joueur</th>
            <th>Score</th>
            {(isAuthenticated && (<th>...</th>))}
          </tr>
        </thead>
        <tbody>
          {
            hallOfFames.sort((a, b) => b.scores - a.scores).map(
              halloffame =>
                <tr key={halloffame._id}>
                  <td>{halloffame._id}</td>
                  <td>{halloffame.player}</td>
                  <td>{halloffame.score}</td>
                  {(isAuthenticated && (
                    <td>
                      <button onClick={() => deleteHallOfFame(halloffame._id)} className='btn btn-danger'>Delete</button>
                    </td>
                  ))}
                </tr>
            )
          }
        </tbody>
      </Table>
    </Layout>
  )
}

export default ListHallOfFame
