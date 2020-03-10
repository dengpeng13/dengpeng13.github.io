


import React ,{Component} from "react"
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import LazyLoad from "../../utils/lazyload"
import Main from "./main"


export default class MainLayout extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/" exact render={()=>(<Redirect to="/main" />)} />
                    <Route path="/main" component={Main} />
                    <Route path="/login" component={LazyLoad(()=>import("./login"))} />
                    <Route render={()=>(<Redirect to="./main" />)} />
                    
                </Switch>
            </div> 
        )
    }
}