import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbarcomp } from '../components'
import { QuizList, QuizInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import Instructions from '../pages/Instructions'

function App() {
    return (
        <Router>
            <Navbarcomp />
            <Switch>
                <Route path="/Quiz" exact component={QuizList} />
                <Route path="/addQues" exact component={QuizInsert} />
            </Switch>
        </Router>
    )
}

export default App
