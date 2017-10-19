import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import App from './App'
import About from './About'


class AppRouter extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <Router>
                <Switch>
                <Route  exact path={"/"} component={App}/>
                <Route  exact path={"/about"} component={About}/>
                </Switch>
            </Router>
        )
    }
}


export default AppRouter;