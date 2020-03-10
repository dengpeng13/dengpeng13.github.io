import "./index.scss"
import React, {Component} from "react"
import {MySwipe} from "~/components/swipe";
import {Button} from "antd-mobile"

const SwipeItem = MySwipe.Item;

export default class Guide extends Component{

    constructor(){
        super();
        this.state = {
            imgs:[
              "http://101.200.167.209/images/hua1.jpg",
              "http://101.200.167.209/images/hua2.jpg",
              "http://101.200.167.209/images/hua3.jpg",
              "http://101.200.167.209/images/hua4.jpg",
           
            ]
        }
    }


    handleMain = (index) =>{
        this.props.history.push("/main/home")
    }


    render(){
        return (
            <div className="g-box">
                <MySwipe
                    id="guide"
                    options={{loop:false,autoplay:{delay:1500},speed:1200}}
                >
                    {
                        this.state.imgs.map((item,idx)=>{
                            return (
                                <SwipeItem key={idx} >
                                    <img  src={item} onClick = {()=>this.handleGotoMain(idx)} className="g-img" alt=""/>
                                     {idx==this.state.imgs.length-1&&<Button className ="gotobtn" type="warning"></Button>}
                                </SwipeItem>    
                            )
                        })
                    }
                </MySwipe>   
                <div className = "btn" onClick = {this.handleMain}>
                     点击进入鲜花专场
                   
                </div>
            </div>
        )
    }
}