
import { Picker, List, TextareaItem,Button } from 'antd-mobile';
import React, { Component } from "react"
import "./index.scss"

import Head from "~/components/head"



export default class Card extends Component {
    render() {
        return (
            <div>
                <Head title="贺卡留言" show search></Head>

                <div>
                    <List renderHeader={() => 'Count'}>
                        <TextareaItem
                            // {...getFieldProps('count', {
                            //     initialValue: '计数功能,我的意见是...',
                            // })}
                            rows={5}
                            count={100}
                        />
                    </List>

                    <Button type="warning" className="btn">保存</Button>

                </div>

            </div>
        )
    }
}



