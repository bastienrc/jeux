import styled, { createGlobalStyle } from 'styled-components'
import Navigation from './Navigation'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #BADA55;
    font-family: Consolas, 'Courier New', monospace;
  }
`

const Container = styled.main`
  margin: auto;
  width: 80%;
  max-width: 800px;
  font-family: sans-serif
`

const Heading = styled.h1`
  color: green;
  text-align: center;
  margin: 1.5rem 0 2rem 0;
`

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyle />
      <title>Mes Jeux</title>
      <Navigation />
      <Container>
        <Heading>{pageTitle}</Heading>
        {children}
      </Container>
    </>
  )
}

export default Layout
