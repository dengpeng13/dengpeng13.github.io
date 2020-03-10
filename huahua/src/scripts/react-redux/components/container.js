
import React, {Component} from "react";
import {connect} from "react-redux"
import {Button} from "antd-mobile"
import { countDesc, changeCount, changeCity, getMvAsync } from "../actions";

// @connect  类 class 的装饰器   只能写在 class 前面
// 可以把内部的 方法和变量 传递给 class 类  

@connect(
    // mapStateToProps
    (state)=>{
        console.log(state);
        return {
            ...state,
            data:state.data
        }
    },
    // mapDispatchToProps 
    dispatch=>{
        return {
            countAdd:()=>dispatch({type:"COUNTADD"}), 
            countDesc:()=>dispatch(countDesc),
            changeCount:(payload)=>dispatch(changeCount(payload)),
            changeCity:payload=>dispatch(changeCity(payload)),
            getMv:(payload)=>dispatch(getMvAsync(payload))
        }
    }
)
class ContainerUI extends Component{
    render(){
        console.log(this.props);
        const {
            data:{
                count,
                city,
                mv
            },
            countAdd,
            countDesc,
            changeCount,
            changeCity,
            getMv
        } = this.props;
        return (
            <div>
                <hr/>
                <h2> react-redux 实现计数器  </h2>
                <h2>这是一层 UI 组件 </h2>
                <h2>@connect 类的装饰器 </h2>
                <h2> count === {count} </h2>
                <h2>city == {city}</h2>
                <hr/>
                <Button type="warning" onClick={countAdd} inline >count add</Button>
                <Button type="warning" onClick={countDesc} inline >count desc</Button>
                <Button type="warning" onClick={()=>changeCount(50)} inline >change Count</Button>
                <Button type="primary" onClick={()=>changeCity('我想去 巴厘岛')} inline >我想去 巴厘岛 </Button>
                <Button type="primary" onClick={()=>getMv({url:"/vue/maizuo/banner"})} inline >get mv </Button>
                {
                    mv&&mv.map((m,i)=>{
                        return (
                            <p key={i}>
                                {m.name}--{i}
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}

export default ContainerUI;