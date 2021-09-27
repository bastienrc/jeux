import styled, { createGlobalStyle } from 'styled-components'
import Navigation from './Navigation'
import bgImg from '../images/shattered-island.gif'

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
    background-image: url(${bgImg});
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
  margin: 1.5rem auto;
  width: 80%;
  height: 100%;
`

const Footer = styled.footer`
  background-color: #222;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 0.9em;
  padding: 0.8em 0;
`

function Layout ({ pageTitle, children }) {
  const year = new Date().getFullYear()
  return (
    <>
      <GlobalStyle />
      <Container>
        <title>Jeux</title>
        <Navigation brand={pageTitle} />
        <Main>
          {children}
        </Main>
        <Footer>Jeux ~ {year} ~ Sebastien Colbert</Footer>
      </Container>
    </>
  )
}

export default Layout
