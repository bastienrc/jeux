import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Auth from '../contexts/Auth'
import { logout } from '../services/AuthApi'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: white;
  width: 100%;
`

const Brand = styled(Link)`
  font-size: 3rem;
  margin: 10px;
  color: white;
  text-decoration: none;
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

const Navigation = ({ brand }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth)

  const handleLogout = () => {
    logout()
    setIsAuthenticated(false)
  }

  return (
    <Nav>
      <Brand to='/' exact>{brand}</Brand>
      <NavLinks>
        <NavLinkItem>
          <NavLinkText to='/' exact activeClassName='navActive'>
            Home
          </NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText to='/halloffame' exact activeClassName='navActive'>
            Hall Of Fame
          </NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText to='/a-propos' activeClassName='navActive'>
            À Propos
          </NavLinkText>
        </NavLinkItem>
        {(!isAuthenticated && (
          <>
            <NavLinkItem>
              <NavLinkText to='/login' activeClassName='navActive'>
                Se connecter
              </NavLinkText>
            </NavLinkItem>
            <NavLinkItem>
              <NavLinkText to='/sign-up' activeClassName='navActive'>
                S'enregistrer
              </NavLinkText>
            </NavLinkItem>
          </>
        )) || (
          <>
            <NavLinkItem>
              <NavLinkText to='/account' activeClassName='navActive'>
                Mon compte
              </NavLinkText>
            </NavLinkItem>
            <NavLinkItem>
              <button onClick={handleLogout}>Déconnexion</button>
            </NavLinkItem>
          </>
        )}
      </NavLinks>
    </Nav>
  )
}

export default Navigation
