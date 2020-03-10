

import "./index.scss"

import React, { Component } from "react"

import Head from "~/components/head"
import { axios, history } from "&"
import { connect } from "react-redux"


import {
    WingBlank,
    WhiteSpace,
    Carousel,
    Accordion,
    List
} from "antd-mobile"
import { Link,NavLink } from "react-router-dom"
import { changeCount, getBanner } from "../../actions"

@connect(
    state => {
        return {
            count: state.getIn(['data', 'count']),
            banner: state.getIn(['data', 'banner'])
        }
    }
)

class Home extends Component {

    constructor() {
        super();
        this.state = {
            imgs: "http://101.200.167.209/images/logo.png",
            post: [

                "http://101.200.167.209/images/hua1.jpg",
                "http://101.200.167.209/images/hua2.jpg",
                "http://101.200.167.209/images/hua3.jpg",
                "http://101.200.167.209/images/hua4.jpg",
            ],

            img1: [

                "http://101.200.167.209/images/font1.png",
                "http://101.200.167.209/images/font2.png",
                "http://101.200.167.209/images/font3.png",
                "http://101.200.167.209/images/font4.png",
                "http://101.200.167.209/images/font5.png",
            ],

            img2: [

                "http://101.200.167.209/images/tu1.png",
                "http://101.200.167.209/images/tu2.png",
                "http://101.200.167.209/images/tu3.png",

            ],

            img3: [

                "http://101.200.167.209/images/po1.png",
                "http://101.200.167.209/images/po2.png",
                "http://101.200.167.209/images/po3.png",
                "http://101.200.167.209/images/po4.png",

            ],
            img4: [

                "http://101.200.167.209/images/banner1.png",
                "http://101.200.167.209/images/banner2.png",


            ],
            img5: [

                "http://101.200.167.209/images/new1.png",
                "http://101.200.167.209/images/new2.png",
                "http://101.200.167.209/images/new3.png",


            ],

        }
    }
    // state = {
    //     data: ['1', '2', '3'],
    //     imgHeight: 176,
    // }


    componentDidMount() {

        this.props.dispatch(getBanner({
            url: "/react/xianhua",
        }))
    }


    handleGoDetails = () => {
        // history.push("/details")
    }
    handlePo = () => {

    }

    render() {

        const {
            count,
            dispatch,
            banner,
            ItemCode
        } = this.props
        console.log(this.props)

        return (

            <div className="main">
                {/* 头部 */}
                {/* <div className="head-box">
                    <div className=" left">

                    </div>
                    <div className="center">
                        <img src={this.state.imgs} alt="" />
                    </div>
                    <div className=" right">


                    </div>
                </div> */}

                <div className="headbox">


                    <div className="left">

                    </div>

                    <div className="center">
                        <img src={this.state.imgs} alt="" />
                    </div>

                    <div className="right">

                    </div>
                </div>


                {/* 轮破图 */}
                <div className="banner">

                    <Carousel
                        autoplay={false}
                        infinite
                        autoplay
                        beforeChange={(from, to) => (`slide from ${from} to ${to}`)}
                        afterChange={index => ('slide to', index)}
                    >
                        {this.state.post.map(val => (
                            <a
                                key={val}
                                // href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top', height: '3.6rem ' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>


                </div>

                <WingBlank>
                    <div className="infos">

                        <div className="info-div">
                            <span></span>
                            <span>认证龙头企业</span>
                        </div>
                        <div className="info-div">
                            <span></span>
                            <span>15年品牌</span>
                        </div>
                        <div className="info-div">
                            <span></span>
                            <span>3小时送花</span>
                        </div>
                        <div className="info-div">
                            <span></span>
                            最近<span></span>条好评
                         </div>
                    </div>
                </WingBlank>


                <div className="procate">

                    <ul className="procate-ul">
                        <li>
                            <img src={this.state.img1[0]} alt="" />
                            <p>鲜花</p>
                        </li>
                        <li>
                            <img src={this.state.img1[1]} alt="" />
                            <p>永生花</p>
                        </li>
                        <li>
                            <img src={this.state.img1[2]} alt="" />
                            <p>蛋糕<s></s></p>
                        </li>
                        <li>
                            <img src={this.state.img1[3]} alt="" />
                            <p>礼品</p>
                        </li>
                        <li>
                            <img src={this.state.img1[4]} alt="" />
                            <p>巧克力</p>
                        </li>
                    </ul>


                </div>

                <div className="modetitle">
                    <div></div>
                    一秒选花

                </div>
                {/* tu */}

                <div className="scene-list">

                    <div>
                        <img src={this.state.img2[0]} alt="" />
                        <span className="spn1">送恋人</span>
                    </div>

                    <div>
                        <img src={this.state.img2[1]} alt="" />
                        <span className="spn2">送长辈</span>
                    </div>

                    <div>
                        <img src={this.state.img2[2]} alt="" />
                        <span className="spn3">送朋友</span>
                    </div>


                </div>



                {/* tu2 */}

                <div className="scene-list1">

                    <div>
                        <span className="spn1">生日祝福</span>
                        <img src={this.state.img3[0]} alt="" />
                    </div>

                    <div>
                        <span className="spn2">表白求婚</span>
                        <img src={this.state.img3[1]} alt="" />
                    </div>

                    <div>
                        <span className="spn3">开业商务</span>
                        <img src={this.state.img3[2]} alt="" />
                    </div>
                    <div>
                        <span className="spn4">周年纪检</span>
                        <img src={this.state.img3[3]} alt="" />
                    </div>


                </div>


                {/* datu */}



                <div className="scene-list2">



                    <div className="box-zero">

                        <img src={this.state.img4[0]} alt="" />
                        <p className="p1">热销售</p>
                        <p className="p2">大家都在卖</p>
                    </div>


                    <div className="box-zero">

                        <img src={this.state.img4[1]} alt="" />
                        <p className="p3">特价专区</p>
                        <p className="p4">限时直降</p>

                    </div>






                </div>
                {/* tu3 */}

                <div className="scene-list3">

                    <div>
                        <img src={this.state.img5[0]} alt="" />
                        <span className="spn1">新品来袭</span>
                    </div>

                    <div>
                        <img src={this.state.img5[1]} alt="" />
                        <span className="spn2">品味之选</span>
                    </div>

                    <div>
                        <img src={this.state.img5[2]} alt="" />
                        <span className="spn3">设计师之选</span>
                    </div>


                </div>


                <div className="title">

                    <h3>送恋人/爱情鲜花</h3>
                </div>
                {/* 
                <div>

                    {

                        banner.map((m, i) => {
                            <Link to={`/details?ItemCode=${m.ItemCode}`}  key={i}>

                                <div className="prouct-list box" >
                                    <img src={m.Img} alt="" />
                                    <div className="box-right">

                                        <p className="px pmc">{m.Cpmc}</p>
                                        <p className="px stro">{m.Instro}</p>
                                        <span></span>
                                        <p className="px ceter">经典款式 精选爆款</p>
                                        <div className="bottom">

                                            <p>
                                                <span className="spn1">￥{m.Price}</span>
                                                <s className="spn2">￥{m.LinePrice}</s>
                                            </p>
                                            <span className="px">已销售11.1万</span>
                                            <span className="iconfont icon-gouwuche-xiantiao"></span>
                                        </div>

                                    </div>

                                </div>



                            </Link>

                        })

                    }

                </div>
 */}

                <div className = "bigbox"> 





                    {

                        banner.map((m, i) => {
                            return (
                                <div className="prouct-list" key={i} >
                                    <NavLink to={`/details?ItemCode=${m.ItemCode}`} >

                                        <div className="prouct-list boxs">
                                            <img src={m.Img} alt="" />
                                            <div className="box-right">

                                                <p className="px pmc">{m.Cpmc}</p>
                                                <p className="px stro">{m.Instro}</p>
                                                <span></span>
                                                <p className="px ceter">经典款式 精选爆款</p>
                                                <div className="bottom">

                                                    <p>
                                                        <span className="spn1">￥{m.Price}</span>
                                                        <s className="spn2">￥{m.LinePrice}</s>
                                                    </p>
                                                    <span className="px">已销售11.1万</span>
                                                    <span className="iconfont icon-gouwuche-xiantiao"></span>
                                                </div>

                                            </div>

                                        </div>



                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="bottom">



                </div>



            </div>
        )
    }
}



export default Home