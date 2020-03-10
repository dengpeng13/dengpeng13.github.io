import "./index.scss"
import React, { Component } from "react"
import {
    Button,
    WhiteSpace,
    NoticeBar,
    List,
    WingBlank,
    InputItem
} from "antd-mobile";
import Head from "~/components/head"
import { axios } from "&";

import { history } from "&"

export const mReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
export const cReg = /^\d{4}$/
// export const cReg = new RegExp('^\d{4}$','gi')

let timer = null;
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            codeFlag: false,
            loginFlag: false,
            count: 60,
            txt: "发送验证码",
            toggle: true
        }
    }

    handleGotoLogin = () => {
        axios.post("/react/sendCode", {
            mobile: 18086417861
        }).then(res => {
            console.log(res);
        })
    }

    handleCheckMobile = (mobile) => {
        var code = this.code.state.value;
        console.log(code,mobile)
        if (this.state.toggle) {
            this.setState({
                codeFlag: mReg.test(mobile),
                loginFlag: mReg.test(mobile) && cReg.test(code)
            })
        }

    }

    handleCheckCode = (code) => {
        var mobile = this.mobile.state.value;
        this.setState({
            loginFlag: mReg.test(mobile) && cReg.test(code)
        })
    }

    start = () => {
        if (this.state.count > 1) {
            this.setState({
                count: --this.state.count,
                txt: `剩余 ${this.state.count} S`,
                codeFlag: false,
                toggle: false
            })
        } else {
            clearInterval(timer);
            timer = null;
            this.setState({
                count: 60,
                txt: '发送验证码',
                codeFlag: true,
                toggle: true
            })
        }
    }

    computedTime = () => {
        this.start();
        timer = setInterval(this.start, 1000);
    }

    handleSendCode = () => {
        // 发送验证码 
        this.computedTime();
        axios.post("/react/aly/sendSms", {
            mobile: this.mobile.state.value
        }).then(res => {
            console.log(res)
        })


    }

    handleSumbit = () => {
        // 校验验证码 
        axios.post("/react/checkCode", {
            mobile: this.mobile.state.value,
            code: this.code.state.value
        }).then(res => {
            if (!!res.data.type) {
                sessionStorage.token = res.data.token;
                sessionStorage.mobile = this.mobile.state.value;
                this.props.history.push("/main/mine");
                clearInterval(timer);
                timer = null;
            } else {
                sessionStorage.token = "";
                sessionStorage.mobile = "";
            }
        })
    }





    render() {
        const {
            codeFlag,
            loginFlag,
            txt
        } = this.state;
        return (
            <div className="box">
                <Head title="登入注册" show={true} login={true} search={true} scan={true} ></Head>

                <div className="logo">
                    <img src="https://img02.hua.com/m/login/wx_login_logo.png" alt="" />
                </div>
                {/* <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    wuhan1910-学好react-精通Vue-征服小程序-精通angular+typeScript
                </NoticeBar> */}
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type="tel"
                            placeholder="请输入手机号"
                            clear
                            ref={el => this.mobile = el}
                            onChange={this.handleCheckMobile}
                        >手机号</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="number"
                            placeholder="请输入验证码"
                            ref={el => this.code = el}
                            onChange={this.handleCheckCode}
                        >验证码</InputItem>
                        <Button
                            type="warning"
                            inline
                            className="l-btn"
                            disabled={!codeFlag}
                            onClick={this.handleSendCode}
                        >{txt}</Button>
                        <WhiteSpace />
                    </List>
                    <Button
                        type="primary"
                        onClick={this.handleSumbit}
                        disabled={!loginFlag}
                        className="btn"
                    >立即登录</Button>

                    <div className="btn-f">账号密码登入</div>





                    <div className="change-box">
                        <div>
                            <div className="deng">其他方式登入</div>
                        </div>

                        <div className="change">


                            <p>

                                <i className="iconfont icon-qq"></i>
                                <span>QQ</span>
                            </p>
                            <p>

                                <i className="iconfont icon-zhifubao"></i>
                                <span>支付宝</span>
                            </p>

                            <p>

                                <i className="iconfont icon--"></i>
                                <span>邮箱</span>
                            </p>
                        </div>



                    </div>
                </WingBlank>
                {/* <Button type="primary">primary</Button><WhiteSpace />
                <Button type="primary" disabled>primary disabled</Button><WhiteSpace />
                <Button type="warning">warning</Button><WhiteSpace />
                <Button type="warning" disabled>warning disabled</Button><WhiteSpace /> */}
            </div>
        )
    }
}