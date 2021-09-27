import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Auth from '../contexts/Auth'
import { logout } from '../services/AuthApi'
import { toast } from 'react-toastify'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  color: white;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`

const Brand = styled(Link)`
  font-size: 3rem;
  margin: 10px 15px;
  color: white;
  text-decoration: none;
  span {
    font-size: 1.6rem;
    font-style: italic
  }
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
  color: #333;
  text-align: center;
  text-decoration: none;
  background-color: #DDD;
  border: none;
  margin: 1rem auto;
  padding: .5rem 1.8rem;
  font-size: 0.92rem;
  font-family: 'Courier New', Courier, monospace;
  clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  &&:hover {
    color: white;
    background-color: #090;
  }
  &.${props => props.activeClassName} {
    background-color: lightgreen;
  }
`

const Logout = styled.button`
  color: #333;
  text-align: center;
  background-color: #DDD;
  border: none;
  margin: 1rem auto;
  padding: .5rem 1.8rem;
  font-size: 0.92rem;
  font-family: 'Courier New', Courier, monospace;
  clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  &&:hover {
    color: white;
    background-color: #090;
  }
`

const Navigation = ({ brand }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth)

  const handleLogout = () => {
    logout()
    setIsAuthenticated(false)
    toast.info('À Bientôt !!!')
  }

  return (
    <Nav>
      <Brand to='/' exact>Jeux <span>{brand}</span></Brand>
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
              <NavLinkText to='/register' activeClassName='navActive'>
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
              <Logout onClick={handleLogout}>Déconnexion</Logout>
            </NavLinkItem>
          </>
        )}
      </NavLinks>
    </Nav>
  )
}

export default Navigation
