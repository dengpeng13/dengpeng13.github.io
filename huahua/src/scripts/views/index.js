

import React, {Component} from "react"

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import LazyLoad from "&/lazyload";
import PropTypes from "prop-types"
// import Guide from "./guide";   
// import Login from "./login";

// 所有的路由  在这里配置 
export default class MainLayout extends Component{
    getChildContext(){
        return {
            history:this.props.history
        }
    }
    render(){
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact render={()=>(<Redirect to="/guide" /> )}  />
                    <Route path="/guide" component={LazyLoad(()=>import("./guide"))} />
                    <Route path="/login" component={LazyLoad(()=>import("./login"))} />
                    <Route path="/search" component={LazyLoad(()=>import("./search"))} />
                    <Route path="/details" component={LazyLoad(()=>import("./details"))} />
                    <Route path="/showcart" component={LazyLoad(()=>import("./showcart"))} />

                    <Route path="/details1" component={LazyLoad(()=>import("./details1"))} />

                    <Route path="/scan" component={LazyLoad(()=>import("./scan"))} />
                    <Route path="/add" component={LazyLoad(()=>import("./add"))} />
                    <Route path="/card" component={LazyLoad(()=>import("./card"))} />
                    <Route path="/pur" component={LazyLoad(()=>import("./pur"))} />
                    <Route path="/cal" component={LazyLoad(()=>import("./cal"))} />
                    <Route  path="/fillout" component={LazyLoad(()=>import("./fillout"))} />
                
                    <Route path="/main" component={LazyLoad(()=>import("./main"))} />
                    <Route render={()=>(<Redirect to="/guide" /> )} />
                </Switch>  
                 
            </div>
        )
    }
}

MainLayout.childContextTypes = {
    history:PropTypes.object
}