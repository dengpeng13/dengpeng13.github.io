

import React, { Component } from "react"

import "./index.scss"
import Head from "~/components/head"
import {
    Switch,
    Route,
    Redirect,

} from "react-router-dom"
import { history } from "&"
import LazyLoad from "&/lazyload"
import Add from "../add"


// import 


export default class Fillout extends Component {


    headleGoAdd = () => {
        history.push("/add")
    }
    headleGoPur = () => {
        history.push("/pur")
    }
    headleGoCard = () => {
        history.push("/card")
    }
    headleGoCal = () => {
        history.push("/cal")
    }
    render() {
        return (
            <div className="main">





                <Head title="提交订单" show search></Head>

                <div className="form-group form-group-big">


                    <p className="left">收货人</p>

                    <p className="center">
                        <span></span>
                        <span>请填写收货地址</span>

                    </p>
                    <p onClick={this.headleGoAdd}>></p>

                </div>
                <div className="form-group form-group-center">


                    <p className="left">订购人信息</p>

                    <p className="center">

                        <span>请填写</span>

                    </p>
                    <p onClick={this.headleGoPur}>></p>
                </div>
                <div className="form-group form-group-center">


                    <p className="left">送达日期</p>

                    <p className="center">

                        <span>请选着</span>

                    </p>
                    <p onClick={this.headleGoCal}>></p>
                </div>
                <div className="form-group form-group-center">


                    <p className="left">贺卡留言</p>

                    <p className="center" style={{ textAlign: "left", marginLeft: '5px' }}>

                        <span>填写赠精美贺卡</span>

                    </p>
                    <p onClick={this.headleGoCard}>></p>
                </div>



                <div className="form-group form-group-center">


                    <p className="left">备注/优惠券/权益卡/发票</p>


                </div>


                <div className="item">
                    <div className="item-list">
                        <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg" alt="" className="img" />

                        <div className="box">
                            <p className="sp1">[鲜花]一心一意</p>
                            <p className="sp2">数量：<span>10</span></p>
                        </div>

                        <p className="font">
                            ￥<span>60</span>
                        </p>



                    </div>

                    <div className="item-list1">

                        <p className="font1">商品总金额</p>
                        <p className="font2">
                            ￥<span>600</span>

                        </p>
                    </div>


                </div>


                <div className="bottom">

                    <div className="left">
                        <span style={{ fontSize: "13px" }}>合计：</span>
                        <span style={{ color: "#FF734C", fontSize: "18px" }}>600</span>

                    </div>
                    <div className="right">
                        去结算

                    </div>


                </div>

            </div>
        )
    }
}






