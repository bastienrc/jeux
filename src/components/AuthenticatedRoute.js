import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from '../contexts/Auth'

function AuthenticatedRoute ({ path, component }) {
  const { isAuthenticated } = useContext(Auth)

  return isAuthenticated
    ? (
      <Route exact path={path} component={component} />
      )
    : (
      <Redirect to='/login' />
      )
}

export default AuthenticatedRoute
