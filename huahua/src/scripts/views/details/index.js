
import "./index.scss"
import React, { Component } from "react"


import Head from "~/components/head"

import { Link } from "react-router-dom"

import { connect } from "react-redux"


import { axios, history } from "&"
import {
    WingBlank,
    WhiteSpace,
    Card,
    Stepper,
    Button,
    Modal,
    Toast
} from "antd-mobile"

const alert = Modal.alert;

const showAlert = () => {
    const alertInstance = alert('提示', '你即将去购物车页面结算', [
        { text: '取消', onPress: () => console.log('取消操作'), style: 'default' },
        { text: '同意', onPress: () => history.push("/main/cart") },
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
    }, 500000);
};



class Details extends Component {

    constructor() {
        super();
        // result
        this.state = {
            ItemCode: '',
            info: null,
            count: 1,
            data: {},
        }

    }


    changeCount = (val) => {
        console.log(val);
        this.setState({ count: val })
    }

    componentDidMount() {
        var ItemCode = new URLSearchParams(this.props.location.search).get('ItemCode');
        axios.get(`/react/details?ItemCode=${ItemCode}`, {

        }).then(res => {


            this.setState({ data: res.data.result })
        })

    }



    addToCar = () => {
        // 加入购物车  
        axios.post("/react/addToShopcar", {
            count: this.state.count,
            data: this.state.data,
            ItemCode: new URLSearchParams(this.props.location.search).get('ItemCode')
            // ItemCode = new URLSearchParams(this.props.location.search).get('ItemCode')
        }).then(res => {

        })
    }
    render() {
        const {
            match,
            location,

            // data

        } = this.props

        // console.log(data)
        const {
            data
            // result
        } = this.state

        // console.log(data)





        return (

            <div >
                <Head title="商品详情" show="true" search={true} scan={true}></Head>






                {

                    data && <div className="box">
                        <img src={data.Img} alt="" />
                        <div className="box-one">
                            <div className="box-head">
                                <p>{data.Cpmc}{data.Instro}</p>
                                <span></span>
                            </div>



                            <div className="box-head1">
                                <p className="left">￥{data.Price}
                                    <s>{data.LinePrice}</s>

                                </p>

                                <p className="right">

                                    <span>已销售11.1万</span>
                                </p>

                            </div>

                        </div>
                    </div>
                }


                <div className="price">
                    <div>
                        购买数量:
                    <Stepper
                            style={{ width: '50%', minWidth: '100px' }}
                            showNumber
                            min={1}
                            value={this.state.count}
                            onChange={this.changeCount}
                        />
                    </div>



                </div>




                <div className="detailsinfos">
                    <div className="detailsinfo-two">


                        <div className="detailsinfo-one">
                            <p className="iconfont icon-kefu"></p>
                            <p>客服</p>
                        </div>
                        <div className="detailsinfo-one">
                            <Link to="/showcart">
                                <p className="iconfont icon-gouwuche-xiantiao"></p>
                                <p>购物车</p>
                            </Link>
                        </div>


                    </div>


                    <div className="detailsinfo-three">


                        <div className="detailsinfo-four pp" onClick={this.addToCar}>
                            <p >加入购物车</p>
                        </div >

                        <div className="detailsinfo-four two" onClick={showAlert}>
                            <p>立即购买</p>
                        </div>



                    </div>




                </div>

            </div>
        )
    }


}


export default Details




