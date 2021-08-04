import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListScoreComponent from './components/ListScoreComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CreateScoreComponent from './components/CreateScoreComponent'
import ViewScoreComponent from './components/ViewScoreComponent'

function App () {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={ListScoreComponent} />
            <Route path='/scores' component={ListScoreComponent} />
            <Route path='/add-score/:id' component={CreateScoreComponent} />
            <Route path='/view-score/:id' component={ViewScoreComponent} />
            {/* <Route path = "/update-score/:id" component = {UpdateScoreComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  )
}

export default App
