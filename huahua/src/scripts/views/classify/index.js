

import "./index.scss"

import React, { Component } from "react"
import { Menu, ActivityIndicator, NavBar, SearchBar } from 'antd-mobile';

import Head from "~/components/head"
import { history } from "&"
import classify from "~/mobx/classify"
import { observer } from "mobx-react"
import { Link ,NavLink} from "react-router-dom"




const data = [
    {
        value: '1',
        label: '热门推荐',

    }, {
        value: '2',
        label: '鲜花',
        children: [
            {
                label: '鲜花',
                value: '1',
            }, {
                label: 'Supermarket',
                value: '2',
                disabled: false,
            }],
    },
    {
        value: '3',
        label: '永生花',
        children: [
            {
                label: '鲜花',
                value: '1',
            }, {
                label: 'Supermarket',
                value: '2',
                disabled: false,
            }],
    },
    {
        value: '4',
        label: '蛋糕',
        children: [
            {
                label: '鲜花',
                value: '1',
            }, {
                label: 'Supermarket',
                value: '2',
                disabled: false,
            }],
    },
    {
        value: '5',
        label: '特色礼品',
        children: [
            {
                label: '鲜花',
                value: '1',
            }, {
                label: 'Supermarket',
                value: '2',
                disabled: false,
            }],
    }



];

@observer
class Classify extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }


    componentDidMount() {
        classify.getShangpingLists("/react/shangping")
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: data,
                });
            }, 500);
        }
    }

    handleSubmit = () => {
        history.push("/search")
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }

    render() {
        const {
            shangpingLists
        } = classify
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
                className="foo-menu"
                data={initData}
                value={['1', '3']}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.6}
            />
        );
        const loadingEl = (
            <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div >


                {/* <Head title="商品详情" show></Head> */}



                <div className={show ? 'menu-active' : ''}>
                    <div>
                        <NavBar
                            leftContent="菜单"
                            // mode="light"
                            icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt=""  style={{width:"22",height:"22"}}/>}
                            onLeftClick={this.handleClick}
                            className="top-nav-bar"
                        >

                        </NavBar>
                    </div>
                    {show ? initData ? menuEl : loadingEl : null}
                    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                </div>

                <div className="bigboxs" >
                    <img src="https://img02.hua.com/slider/20_yuandan_all.jpg" alt="" className="img1" />
                </div>

                <div className="boxone">
                    {

                        shangpingLists && shangpingLists.map((m, i) => {
                            return (
                                <div className="box-two" key={i}>
                                    <NavLink to={`/details1?Id=${m.Id}&Title=${m.Title}`}>
                                        <img src={m.Imgs} alt="" className ="imgbox" />
                                        <p>{m.Title}</p>
                                    </NavLink>
                                </div>
                            )
                        })

                    }



                </div>

            </div >
        )
    }
}


export default Classify