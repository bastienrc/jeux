import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: white;
  width: 100%;
`

const Brand = styled.div`
  font-size: 3rem;
  margin: 10px;
`

const NavLinks = styled.ul`
  display: flex;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin: 10px;
`

const NavLinkItem = styled.li`
  margin: 5px;
`

const NavLinkText = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: greenyellow;
  padding: 5px 10px;
  border-radius: 10px;
  &&:hover {
    color: white;
    background-color: green;
  }
  &.${props => props.activeClassName} {
    background-color: lightgreen;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <Brand>Jeux</Brand>
      <NavLinks>
        <NavLinkItem>
          <NavLinkText to='/' exact activeClassName='navActive'>
            Home
          </NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText to='/a-propos' activeClassName='navActive'>
            À Propos
          </NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText to='/sign-up' activeClassName='navActive'>
            Sign Up
          </NavLinkText>
        </NavLinkItem>
      </NavLinks>
    </Nav>
  )
}

export default Navigation
