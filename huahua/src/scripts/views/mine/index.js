

import "./index.scss"

import React, { Component } from "react"

import { history ,axios} from "&"
import Head from "~/components/head"
import UploadImg from "~/components/uploadImg"



const mine = [
    { txt: "首页", path: "/main/home", name: "home", icon: "icon-shoucang" },
    { txt: "商品", path: "/main/classify", name: "classify", icon: "icon-fenlei" },
    { txt: "购物车", path: "/main/cart", name: "cart", icon: "icon-gouwuche-xiantiao" },
    { txt: "我", path: "/main/mine", name: "mine", icon: "icon-wode1" }
];
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {

            post: [

           "http://101.200.167.209/images/minefont1.png",
           "http://101.200.167.209/images/minefont2.png",
           "http://101.200.167.209/images/minefont3.png",

            ],
            isLogin: !!sessionStorage.token,
            mobile: null




        }

    }

    state = {
        mine,
        active: 2
    }

    componentDidMount(){
        axios.post("/react/getMobile").
        then(res=>{
            this.setState({
                mobile:res.data.result
            })
        })
    }


    handleGoLogin() {
        history.push("/login");
    }
    render() {
        const {
            isLogin,
            mobile
        } = this.state;
        return (
            <div className="main">
                <Head title="个人中心" show="true"  search></Head>

                {
                    isLogin && <div className="userinformation ">
                        <div className="userinformation-notlogin">

                            <div className="laodImg">
                                <UploadImg></UploadImg>
                            </div>
                            <p> {mobile} </p>
                        </div>



                    </div>
                }
                {
                    !isLogin && <div className="userinformation ">
                        <div className="userinformation-notlogin">
                            <p>Hi,欢迎来到花礼网</p>
                            <button className="btn" onClick={this.handleGoLogin.bind(this)}>登入/注册</button>

                        </div>





                    </div>
                }

                {/* 订单 */}
                <div className="panel">
                    <div className="panel-head">

                        <p style={{ lineHeight: "44px" }}>我的订单</p>
                        <p style={{ lineHeight: '44px', textAlign: "right" }}>全部订单</p>

                    </div>
                    <div className="panel-body">

                        <div>


                            <img src={this.state.post[0]} alt="" className="img1" />
                            <p >待付款</p>
                        </div>
                        <div>


                            <img src={this.state.post[1]} alt="" className="img2" />
                            <p>今日配送</p>
                        </div>
                        <div>


                            <img src={this.state.post[2]} alt="" className="img3" />
                            <p>待评价</p>
                        </div>
                    </div>

                </div>


                {/* 优惠券 */}
                <div className="panel2">
                    <div className="linkbox">
                        <div>

                            <p className="iconfont icon-youhuiquan"></p>
                            <p>优惠券</p>
                        </div>

                        <div>

                            <p className="iconfont icon-quanyiqia"></p>
                            <p>权益卡</p>
                        </div>


                        <div>

                            <p className="iconfont icon-yue"></p>
                            <p>余额</p>
                        </div>



                        <div>

                            <p className="iconfont icon-integral"></p>
                            <p>会员积分</p>
                        </div>






                    </div>
                    <div className="linkbox1">
                        <div>

                            <p className="iconfont icon-dizhi"></p>
                            <p>收货地址</p>
                        </div>

                        <div>

                            <p className="iconfont icon-wodetixing-copy"></p>
                            <p>生日纪念提醒</p>
                        </div>


                        <div>

                            <p className="iconfont icon-shoucang"></p>
                            <p>我的收藏</p>
                        </div>



                        <div>

                            <p className="iconfont icon-integral"></p>
                            <p>会员积分</p>
                        </div>

                    </div>

                </div>

                {/* 客服 */}

                <div className="panel3">



                    <div className="linkbox3">
                        <div>

                            <p className="iconfont icon-kefu"></p>
                            <p>联系客服</p>
                        </div>

                        <div>

                            <p className="iconfont icon-bangzhuzhongxin"></p>
                            <p>帮助中心</p>
                        </div>


                        <div>

                            <p className="iconfont icon-tixing"></p>
                            <p>关于花礼</p>
                        </div>



                        <div>

                            <p className="iconfont icon-shezhi"></p>
                            <p>设置</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}