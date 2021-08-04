import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Global
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import SignUp from './pages/SignUp'

// HallOfFame
import ListHallOfFame from './pages/HallOfFame/ListHallOfFame'
import CreateHallOfFame from './pages/HallOfFame/CreateHallOfFame'
import ViewHallOfFame from './pages/HallOfFame/ViewHallOfFame'

function App () {
  return (
    <div id='layout'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/a-propos' exact component={About} />
          <Route path='/sign-up' exact component={SignUp} />

          <Route path='/halloffame' component={ListHallOfFame} />
          <Route path='/add-halloffame/:id' component={CreateHallOfFame} />
          <Route path='/view-halloffame/:id' component={ViewHallOfFame} />

          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
