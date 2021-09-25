import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { hasAuthenticated } from './services/AuthApi'
import Auth from './contexts/Auth'
import AuthenticatedRoute from './components/AuthenticatedRoute'

// Global
import Home from './pages/Home'
import Pendu from './pages/Pendu'
import Snake from './pages/Snake'
import Flashcard from './pages/Flashcard'
import About from './pages/About'
import SignUp from './pages/users/Register'
import Login from './pages/users/Login'
import Private from './pages/users/Private'
import Page404 from './pages/Page404'
import Profile from './pages/users/Profile'
import Account from './pages/users/Account'

// HallOfFame
import ListHallOfFame from './pages/HallOfFame/ListHallOfFame'
import CreateHallOfFame from './pages/HallOfFame/CreateHallOfFame'
import ViewHallOfFame from './pages/HallOfFame/ViewHallOfFame'

function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pendu' exact component={Pendu} />
          <Route path='/snake' exact component={Snake} />
          <Route path='/flashcard' exact component={Flashcard} />
          <Route path='/a-propos' exact component={About} />
          <Route path='/login' exact component={Login} />
          <Route path='/private' exact component={Private} />
          <Route path='/sign-up' exact component={SignUp} />

          <AuthenticatedRoute path='/account' component={Account} />
          <AuthenticatedRoute path='/profile' component={Profile} />

          <Route path='/halloffame' component={ListHallOfFame} />
          <AuthenticatedRoute path='/add-halloffame/:id' component={CreateHallOfFame} />
          <Route path='/view-halloffame/:id' component={ViewHallOfFame} />

          <Route component={Page404} />
        </Switch>
      </Router>
    </Auth.Provider>
  )
}

export default App
