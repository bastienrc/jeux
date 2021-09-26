import styled, { createGlobalStyle } from 'styled-components'
import Navigation from './Navigation'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #BADA55;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`

const Main = styled.main`
  margin: auto;
  width: 80%;
  height: 100%;
  h1 {
    color: green;
    text-align: center;
    margin: 1.5rem 0 2rem 0;
  }
`

const Footer = styled.footer`
  background-color: #111;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 1em;
  padding: 1em 0;
`

const Layout = ({ pageTitle, children }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <GlobalStyle />
      <Container>
        <title>Mes Jeux</title>
        <Navigation brand='Mes Jeux' />
        <Main>
          <h1>{pageTitle}</h1>
          {children}
        </Main>
        <Footer>Mes Jeux ~ {year} ~ Sebastien Colbert</Footer>
      </Container>
    </>
  )
}

export default Layout
