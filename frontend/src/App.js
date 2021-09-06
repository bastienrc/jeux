import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Global
import Home from './pages/Home'
import Pendu from './pages/Pendu'
import Snake from './pages/Snake'
import Flashcard from './pages/Flashcard'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Page404 from './pages/Page404'

// HallOfFame
import ListHallOfFame from './pages/HallOfFame/ListHallOfFame'
import CreateHallOfFame from './pages/HallOfFame/CreateHallOfFame'
import ViewHallOfFame from './pages/HallOfFame/ViewHallOfFame'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pendu' exact component={Pendu} />
        <Route path='/snake' exact component={Snake} />
        <Route path='/flashcard' exact component={Flashcard} />
        <Route path='/a-propos' exact component={About} />
        <Route path='/login' exact component={Login} />
        <Route path='/sign-up' exact component={SignUp} />

        <Route path='/halloffame' component={ListHallOfFame} />
        <Route path='/add-halloffame/:id' component={CreateHallOfFame} />
        <Route path='/view-halloffame/:id' component={ViewHallOfFame} />

        <Route component={Page404} />
      </Switch>
    </Router>
  )
}

export default App
