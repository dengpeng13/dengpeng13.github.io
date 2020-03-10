
import { Picker, List, WhiteSpace } from 'antd-mobile';
import React, { Component } from "react"
import "./index.scss"

import Head from "~/components/head"


import {history} from "&"


import {Button} from "antd-mobile"



export default class Pur extends Component {

    goHome=()=>{
        history.goBack()
    }
    render() {
        return (
            <div>
                <Head title="订购人信息" show search></Head>

                <div className="box">
                   
                    <label htmlFor="">订购人姓名 :</label>
                    <input type="text" placeholder="你的姓名" />

                </div>
                <div className="box">

                    <label htmlFor="">订购人手机 :</label>
                    <input type="text" placeholder="你的手机" />

                </div>

                <Button type="primary" className="btn" onClick = {this.goHome}>确认</Button>

            </div>
        )
    }
}



