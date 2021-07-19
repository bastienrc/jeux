import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pendu from './pages/Pendu'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Page404 from './pages/Page404'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pendu' exact component={Pendu} />
        <Route path='/a-propos' exact component={About} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route component={Page404} />
      </Switch>
    </Router>
  )
}

export default App
