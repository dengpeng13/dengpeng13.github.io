


import React, { Component } from "react"

import "./index.scss"

import Head from "~/components/head"

import { observer } from "mobx-react"
import { axios } from "&"
import classify from "~/mobx/classify"


import {NavLink} from "react-router-dom"

import { Tabs, WhiteSpace, Badge } from 'antd-mobile';



const tabs = [
    { title: <Badge >新品</Badge> },
    { title: <Badge text={'今日(20)'}>销量</Badge> },
    { title: <Badge >价格</Badge> },
    { title: <Badge >综合</Badge> },
];
@observer

class Details1 extends Component {
    constructor() {
        super()
        this.state = {
            Id: '',
            // data: {}
        }
    }

    componentDidMount() {
       


    }
    componentWillMount() {
        var Id = new URLSearchParams(this.props.location.search).get('Id');
        classify.getShangpingList(`/react/details1?Id=${Id}`)
    }


    render() {
       
        const {

            location
        } = this.props;

        const {
            shangpingList
        } = classify
        







        return (
            <div className="main">

                <Head title={new URLSearchParams(location.search).get('Title')} show ></Head>

                <div className="box">
                    <div>
                        综合
                   </div>
                    <div>
                        销量
                   </div>
                    <div>
                        价格
                   </div>
                    <div>
                        综合
                   </div>

                </div>


                <div className="guess-list">


                    {
                        shangpingList.Good && shangpingList.Good.map((m, i) => {
                            return (


                                // <NavLink to={`/details?Id=${m.ItemCode}`}  key={i}>
                                <div className="list"  key={i}>
                                    <img src={m.avatarAddress} alt=""  />
                                    <div className="botom">

                                        <p className="list-sp">{m.Cpmc}{m.Instro}</p>
                                        <p className="price">￥{m.Price}</p>
                                    </div>

                                </div>

                    //   </NavLink>
                            )
                        })
                    }
                </div>






            </div>
        )
    }
}



export default Details1