import Layout from '../../components/Layout'
import styled from 'styled-components'

const Game = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: #999;
  p {
    color: #DDD;
    text-align: center;
  }
`

const Snake = () => {
  return (
    <Layout pageTitle='Snake'>
      <Game>
        <p>Créer un jeux Snake</p>
      </Game>
    </Layout>
  )
}

export default Snake
