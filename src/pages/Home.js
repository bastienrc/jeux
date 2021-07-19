import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'

const CardLink = styled(Link)`
  color: green;
  text-decoration: none;
  background-color: greenyellow;
  padding: 50px;
  border-radius: 10px;
`

const Home = () => {
  return (
    <Layout pageTitle='Mes Jeux'>
      <CardLink to='/pendu'>
        Pendu
      </CardLink>
    </Layout>
  )
}

export default Home
