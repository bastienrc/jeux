import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const CardLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  color: green;
  text-decoration: none;
  background-color: greenyellow;
  margin: 10px;
  border-radius: 10px;
`

const Home = () => {
  return (
    <Layout pageTitle='Mes Jeux'>
      <Cards>
        <CardLink to='/pendu'>Pendu</CardLink>
        <CardLink to='/flashcard'>Flashcard</CardLink>
        <CardLink to='/snake'>Snake</CardLink>
      </Cards>
    </Layout>
  )
}

export default Home
