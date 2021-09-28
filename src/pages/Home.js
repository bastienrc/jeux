import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Card = styled.div`
  filter: drop-shadow(-1px 6px 3px rgba(0, 0, 0, 1));
`

const CardLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  color: #111;
  text-decoration: none;
  background-color: #DDD;
  margin: 10px;
  transition: color 2s, background-color 2s;
  font-family: 'Courier New', Courier, monospace;
  clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  &&:hover {
    color: white;
    background-color: #090;
  }
`

const Home = () => {
  return (
    <Layout>
      <Cards>
        <Card><CardLink to='/pendu'>Pendu</CardLink></Card>
        <Card><CardLink to='/flashcard'>Flashcard</CardLink></Card>
        <Card><CardLink to='/snake'>Snake</CardLink></Card>
      </Cards>
    </Layout>
  )
}

export default Home
