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
  color: #111;
  text-decoration: none;
  background-color: #DDD;
  margin: 10px;
  border-radius: 50% 0 50% 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  &&:hover {
    color: white;
    background-color: #090;
  }
`

const Home = () => {
  return (
    <Layout>
      <Cards>
        <CardLink to='/pendu'>Pendu</CardLink>
        <CardLink to='/flashcard'>Flashcard</CardLink>
        <CardLink to='/snake'>Snake</CardLink>
      </Cards>
    </Layout>
  )
}

export default Home
