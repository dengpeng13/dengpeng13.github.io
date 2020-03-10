

import "./index.scss"

import React, { Component } from "react"

import Head from "~/components/head"

import { WingBlank, SearchBar, WhiteSpace } from "antd-mobile"

import { observer } from "mobx-react"

import classify from "~/mobx/classify"



@observer
class Search extends Component {






    GoBack = () => {
        this.props.history.goBack()
    }



    handleSubmit(keyword) {
        console.log(keyword);

        classify.getSearchList("/react/xianhua", { params: { keyword: keyword } })

    }


    render() {
        const {
            searchList
        } = classify

        console.log(searchList)

        return (
            <div>
                <Head title="搜索" show={true} search={true}></Head>

                <WingBlank>

                    <SearchBar placeholder="Search" onSubmit={this.handleSubmit} />
                </WingBlank>
                <WhiteSpace />




               
                <div className="guess-list" >


                    {
                        searchList && searchList.map((m, i) => {
                            return (
                                <div className="list" key={i}>
                                    <img src={m.Img} alt="" />
                                    <div className="botom">

                                        <p className="list-sp">{m.Cpmc}{m.Instro}</p>
                                        <p className="price">￥{m.Price}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>


{/* 
                <div className='pop'>
                    <h5>热门搜索</h5>
                    <p><span >爱情鲜花</span><span >生日鲜花</span><span  >问候长辈</span></p>
                    <p ><span >探病慰问</span><span >韩式时尚鲜花束</span></p>
                </div> */}


            </div>
        )
    }
}

export default Search