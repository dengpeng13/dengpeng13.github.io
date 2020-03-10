
import { Picker, List, WhiteSpace } from 'antd-mobile';
import React, { Component } from "react"
import "./index.scss"

import Head from "~/components/head"
import { district, provinceLite } from 'antd-mobile-demo-data';



export default class Add extends Component {
    render() {
        // const { getFieldProps } = this.props.form;
        return (
            <div>
                <Head title="修改收货地址" show search></Head>

                <WhiteSpace size="lg" />

                <div className="box">

                    <label htmlFor="">收获人</label>
                    <input type="text" />

                </div>
                <div className="box">

                    <label htmlFor="">收获人</label>
                    <input type="text" />

                </div>
                <List style={{ backgroundColor: 'white' }} className="picker-list">
                    <Picker extra="请选择(可选)"
                        data={district}
                        title="配送至"
                        // {...getFieldProps('district', {
                        //     initialValue: ['340000', '341500', '341502'],
                        // })}
                        onOk={e => console.log('ok', e)}
                        onDismiss={e => console.log('dismiss', e)}
                    >
                        <List.Item arrow="horizontal">所在地区</List.Item>
                    </Picker>

                </List>
                <div className="box">

                    <label htmlFor="">收获人</label>
                    <input type="text" />

                </div>



            </div>
        )
    }
}



