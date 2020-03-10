



import React, {Component} from "react";
import {connect} from "react-redux"
import {Button} from "antd-mobile"
import { countDesc, changeCount, changeCity } from "../../redux/actions";
import { getMvAsync } from "../../../../../../三阶段内容/redex1/two/src/scripts/react-redux/actions";

class ReactReduxDemo extends Component {
    render() {
        const {
            data: {
                count,
                city,
                mv
            
            },
            countAdd,
            countDesc,
            changeCount,
            changeCity,
            getMv
          
        } = this.props
        console.log(this.props)
        return (
            <div>
                <hr />
                <h2>react-redux 实现计数器</h2>
                <h2>这是一层 UI 组件</h2>
                <h2>count == {count}</h2>
                <h2>city === {city}</h2>

                <Button type="warning" onClick= {countAdd}>Count add</Button>
                <Button type="warning" onClick= {countDesc}>Count desc</Button>
                <Button type="warning" onClick={()=>changeCount(50)} inline >change Count</Button>
                <Button type="primary" onClick={()=>changeCity('我想去 巴厘岛')} inline >我想去 巴厘岛 </Button>
                <Button type="primary" onClick={()=>getMv({url:"/vue/maizuo/banner"})} inline >我想去 city </Button>
                {
                    mv.map((m,i)=>{
                        return(
                            <p key ={i}>
                                {m.name} -- {i}
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}

// mapStateToProps 输入逻辑  容器组件 把 自身的state (store.getState) 通过 props 传递给 UI组件
// mapStateToProps 会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.data,
        city: state.data.city

    }
}


const mapDispatchToProps = (dispatch)=>{   // store.dispatch  
    return {
        countAdd:()=>dispatch({type:"COUNTADD"}),  // this.props.countAdd
        countDesc:()=>dispatch(countDesc),
        changeCount:(payload)=>dispatch(changeCount(payload)),
        changeCity:payload=>dispatch(changeCity(payload)),
        getMv:(payload)=>dispatch(getMvAsync(payload))
    }
}

//生成容器组件




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ReactReduxDemo
)