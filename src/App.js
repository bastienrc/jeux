import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { hasAuthenticated } from './services/AuthApi'
import Auth from './contexts/Auth'
import AuthenticatedRoute from './components/AuthenticatedRoute'

// Global
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'

// User
import Account from './pages/users/Account'
import Login from './pages/users/Login'
import Register from './pages/users/Register'

// HallOfFame
import ListHallOfFame from './pages/HallOfFame/ListHallOfFame'
import CreateHallOfFame from './pages/HallOfFame/CreateHallOfFame'

// Pendu
import Pendu from './pages/pendu/Pendu'

// Flashcard
import Flashcard from './pages/flashcard/Flashcard'

// Snake
import Snake from './pages/snake/Snake'

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
          <Route path='/register' exact component={Register} />

          <AuthenticatedRoute path='/account' component={Account} />

          <Route path='/halloffame' component={ListHallOfFame} />
          <AuthenticatedRoute path='/add-halloffame/:id' component={CreateHallOfFame} />

          <Route component={Page404} />
        </Switch>
      </Router>
      <ToastContainer />
    </Auth.Provider>
  )
}

export default App
