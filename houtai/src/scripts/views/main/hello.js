
//首页
import React, { Component } from "react"
import ReactDOM, { render } from "react-dom"
import { Statistic,  //统计数值  ,,倒计时
     Row, Col,
      Calendar,   //日历
      Carousel,   //轮播图
    } from 'antd';
import "./index.scss"
const { Countdown } = Statistic;

var time = () => {
    var EndTime = new Date('2020/01/10 18:00:00')
    var NowTime = new Date()
    var t = EndTime.getTime() - NowTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);

    this.setState({
        deadline: Date.now() + t
    })
}
// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
    console.log('finished!');
}
function onPanelChange(value, mode) {
    console.log(value, mode);
}
class Hello extends Component {

    state = {
        deadline: null,
        nianline: null,
        offerline: null
    }
    componentDidMount() {
        var EndTime = new Date('2020/01/17 18:00:00')
        var nianTime = new Date('2020/01/25 00:00:00')
        var offerTime = new Date('2020/02/14 00:00:00')
        var NowTime = new Date()
        var t = EndTime.getTime() - NowTime.getTime();
        var n_t = nianTime.getTime() - NowTime.getTime();
        var o_t = offerTime.getTime() - NowTime.getTime();

        this.setState({
            deadline: Date.now() + t,
            nianline: Date.now() + n_t,
            offerline: Date.now() + o_t,
        })
    }

    render() {
        const { deadline, nianline, offerline } = this.state
        return (
            <div>

                <Row gutter={16}>
                    <Col span={5} style={{ marginTop: '1%' }}>
                        <Countdown style={{ marginTop: '1%' }} title="距离放假还有:" value={deadline} format="D 天 H 时 m 分 s 秒" />
                        <Countdown style={{ marginTop: '1%' }} title="距离过年还有:" value={nianline} format="D 天 H 时 m 分 s 秒" />
                        <Countdown style={{ marginTop: '1%' }} title="距离offer还有:" value={offerline} format="D 天 H 时 m 分 s 秒" />

                    </Col>
                    <Col span={11} style={{ marginTop: 32, height: 300, lineHeight: "300px" }} >
                        <Carousel autoplay style={{ height: 300, lineHeight: "300px", verticalAlign: 'middle' }}>
                           <Countdown title="距离放假还有:" value={deadline} format="D 天 H 时 m 分 s 秒" />
                           <Countdown title="距离过年还有:" value={nianline} format="D 天 H 时 m 分 s 秒" />
                           <Countdown  title="距离offer还有:" value={offerline} format="D 天 H 时 m 分 s 秒" />
                        </Carousel>
                    </Col>
                    <Col span={8} style={{ marginTop: 32 }}>
                        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Hello
