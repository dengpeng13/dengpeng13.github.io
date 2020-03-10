

import React, { Component } from "react"
import "./index.scss"

import Head from "~/components/head"
import { List, Switch, Calendar } from 'antd-mobile';




const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});
export default class Cal extends Component {
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

    constructor(props) {
      super(props);
      this.state = {
        en: false,
        show: false,
        config: {},
      };
    }
  
    renderBtn(zh, en, config = {}) {
   
  
      return (
        <List.Item arrow="horizontal"
          onClick={() => {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            this.setState({
              show: true,
              config,
            });
          }}
        >
          {this.state.en ? en : zh}
        </List.Item>
      );
    }
  
    changeLanguage = () => {
      this.setState({
        en: !this.state.en,
      });
    }
  
    onSelectHasDisableDate = (dates) => {
      console.warn('onSelectHasDisableDate', dates);
    }
  
    onConfirm = (startTime, endTime) => {
      document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
      this.setState({
        show: false,
        startTime,
        endTime,
      });
    }
  
    onCancel = () => {
      document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
      this.setState({
        show: false,
        startTime: undefined,
        endTime: undefined,
      });
    }
  
    getDateExtra = date => extra[+date];
  


    render() {
        return (
            <div>
                <Head title="配送时间" show search></Head>

                <div>
                    <List className="calendar-list" style={{ backgroundColor: 'white' }}>

                        {this.renderBtn('选择日期时间区间', 'Select DateTime Range', { pickTime: true })}

                        {
                            this.state.startTime &&
                            <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
                        }
                        {
                            this.state.endTime &&
                            <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
                        }
                    </List>
                    <Calendar
                        {...this.state.config}
                        visible={this.state.show}
                        onCancel={this.onCancel}
                        onConfirm={this.onConfirm}
                        onSelectHasDisableDate={this.onSelectHasDisableDate}
                        getDateExtra={this.getDateExtra}
                        defaultDate={now}
                        minDate={new Date(+now - 5184000000)}
                        maxDate={new Date(+now + 31536000000)}
                    />

                </div>

            </div>
        )
    }
}



