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

const Flashcard = () => {
  return (
    <Layout pageTitle='Flashcard'>
      <Game>
        <p>Créer un jeux Flashcard</p>
      </Game>
    </Layout>
  )
}

export default Flashcard
