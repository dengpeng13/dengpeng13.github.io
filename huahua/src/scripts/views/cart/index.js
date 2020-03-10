






import React, { Component } from "react"


import "./index.scss"
import Head from "~/components/head"
import shopcar from "~/mobx/shopcar"
import { observer } from "mobx-react"
import { history } from "&"

import { Link ,NavLink} from "react-router-dom"

import { Button, Checkbox, NoticeBar } from "antd-mobile"
// console.log(shopcar)
@observer









class Showcart extends Component {


    componentDidMount() {
        if (sessionStorage.token) {

            shopcar.getCarList("/react/getCarList")



        } else {
            shopcar.getflowers("/react/xianhua")

        }

    }
    checkOne = e => {
        console.log(e);
        shopcar.changeOneChecked(e.target.checked, e.target.ItemCode);
    }

    checkAll = (e) => {
        console.log(e.target.checked);
        // shopcar.quan =   e.target.checked;
        shopcar.changeQuan(e.target.checked);
    }

    reduce = (ItemCode, count) => {
        if (count > 1) {
            shopcar.changeOneCount(ItemCode, false);
        }
    }

    add = (ItemCode, count) => {

        shopcar.changeOneCount(ItemCode, true);
    }

    changeCount = (ItemCode, v) => {
        console.log(v.target.value);
        if (v.target.value > 1) {
            shopcar.changeOneCountNum(ItemCode, v.target.value * 1)
        }
    }
    handleGoHome = () => {
        history.push("/main/home")

    }

    delSelect = () => {
        shopcar.delSelect();
    }
    handleGoFillout = () => {
        history.push("/fillout")
    }

    headleGoLogin = () => {
        history.push("/login")
    }

    render() {
        const {
            carList,
            carNum,
            total,
            quan,
            flowersList

        } = shopcar
        console.log(carList)
        return (
            <div className='main'>
                <Head title="购物车" search={true} scan={true} show={true}></Head>
                <div style={{ display: sessionStorage.token ? 'none' : 'block' }}  >

                    <div className="cart-login">

                        <span>登入后将同步您的购物车商品</span>
                        <button className="btn" onClick={this.headleGoLogin}>登入</button>
                    </div>

                    <div className="emptycart">

                        <img src="https://img02.hua.com/m/Shopping/m_shopping_empty_cart.png" alt=""  className="enimg"/>

                        <p>购物车内占时没有商品</p>
                        <div className="emptycart1">
                            <button className="btn" onClick={this.handleGoHome}>去逛逛</button>
                        </div>
                    </div>

              
                        <div className="guess-list">


                            {
                                flowersList && flowersList.map((m, i) => {
                                    return (
                                        <NavLink to={`/details?ItemCode=${m.ItemCode}`}  key={i}>
                                        <div className="list" >
                                            <img src={m.Img} alt="" />
                                            <p className="list-sp">{m.Cpmc}'{m.Instro}</p>
                                            <p className="price">￥{m.Price}</p>

                                        </div>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                 
                </div>

                <div style={{ display: !sessionStorage.token ? 'none' : 'block' }}>


                    <div style={{ display: carList.length > 0 ? 'none' : 'block' }} className="emptycart">

                    </div>

                    <div style={{ display: !carList.length > 0 ? 'none' : 'block' }}  >
                        <div id="carDiv">
                            <div id="tbody">
                                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                                    即日-01.一心一意/用心爱你/一往情深/核桃斯诺/布朗尼，实付满200元，配送完成后赠200兑换券。
                                </NoticeBar>
                                {
                                    carList && carList.map((i, index) => {
                                        return (
                                            i.data && <ul className="tr" key={index} id={i._id}>
                                                <li style={{ width: "11%" }}>
                                                    <Checkbox
                                                        checked={i.checked}
                                                        ItemCode={i.ItemCode}
                                                        onChange={this.checkOne} >
                                                    </Checkbox>
                                                </li>
                                                <li style={{ width: "24%" }}><img src={i.data.Img} /></li>
                                                <li style={{ width: "38%" }}>
                                                    <p style={{ lineHeight: "18px", marginTop: '36px' }}></p>
                                                    <p style={{ lineHeight: "18px" }}>￥{i.data.Price}</p>
                                                </li>
                                                <li style={{ width: "26%" }}>
                                                    <span style={{ fontSize: '22px', marginRight: '3px' }} onClick={() => this.reduce(i.ItemCode, i.count)}>-</span>
                                                    <input goodsid={i.ItemCode} type="text" value={i.count} onChange={(v) => { this.changeCount(i.ItemCode, v) }} style={{ width: "54px", fontSize: '16px', textAlign: 'center', background: 'none', border: '0' }} />
                                                    <span style={{ fontSize: '22px' }} onClick={() => this.add(i.ItemCode, i.count)}>+</span>
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            <div className="carFoot">
                                <Checkbox style={{ width: '4%', float: 'left', marginLeft: '2%', lineHeight: '50px', }} onClick={this.checkAll} checked={quan}></Checkbox>
                                <p onClick={this.delSelect} style={{ width: '28%', lineHeight: '50px', fontSize: '14px', color: "red", marginLeft: '4%' }} >删除选中</p>
                                <p style={{ width: '36%', lineHeight: '50px', color: "#fff" }}>
                                    商品总价:<span style={{ width: '100px', color: "red" }}>{total}  </span>
                                </p>


                                <p style={{ backgroundColor: '#5c3715', width: "26%", fontSize: '20px', lineHeight: '50px', textAlign: 'center', color: "#fff", letterSpacing: '2px' }} onClick={this.handleGoFillout}>结算{carNum} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Showcart



