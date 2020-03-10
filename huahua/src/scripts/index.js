import React, { Component } from "react"


import {
    HashRouter as Hash,
    Route,
    Switch
} from "react-router-dom"

import MainLayout from './views'
import store from "./store"
import { Provider } from "react-redux"

export class MainRouter extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Hash
                    basename=""
                >
                    <Route component={MainLayout}></Route>
                </Hash>
            </Provider>

        )
    }
}


//所以的路由在这里配置

//  export class MainLayout extends Component{
//     render(){
//         return(
//             <div>

//                 <Switch>

//                 </Switch>
//             </div>
//         )
//     }
// }

