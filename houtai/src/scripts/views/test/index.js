
//表单数据页面

import React, { Component } from 'react';
import './index.scss';

import {axios} from "&"
import Mock from 'mockjs';
import moment from 'moment';
import { Row, Col, Input, Icon, Cascader, DatePicker, Button, Tooltip, Popconfirm } from 'antd';

// import BreadcrumbCustom from '../common/BreadcrumbCustom';
import address from './request/address.json';
import CollectionCreateForm from '~/components/customizedForm';
import FormTable from '~/components/formTable';
import Mobx from "~/mobx"
import {observer} from "mobx-react"
const Search = Input.Search;
const InputGroup = Input.Group;
const options = [];
const { RangePicker } = DatePicker;

console.log(Mobx)
//数组中是否包含某项
function isContains(arr, item) {
    arr.map(function (ar) {
        if (ar === item) {
            return true;
        }
    });
    return false;
}
//找到对应元素的索引
function catchIndex(arr, key) { //获取INDEX
    var num=null;
    arr.forEach(function (ar, index) {
        if(ar.key === key){
            // console.log(index+"三生三世")
            return num=index;
        }
    });
    return num=!!num?num:0
}
//替换数组的对应项
function replace(arr, item, place) { //arr 数组,item 数组其中一项, place 替换项
    arr.map(function (ar) {
        if (ar.key === item) {
            arr.splice(arr.indexOf(ar), 1, place)
        }
    });
    return arr;
}
@observer
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            address: '',
            timeRange: '',
            visible: false, //新建窗口隐藏
            dataSource: [],
            count: 0,
            selectedRowKeys: [],
            tableRowKey: 0,
            isUpdate: false,
            loading: true,
        };
    }
    //getData
    getData = () => {
        axios.get('/react/all')
            .then(function (response) {
                // console.log(response.data);
                this.setState({
                    dataSource: response.data.result,
                    count:response.data.result.length,
                    loading: false
                })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
            if(!this.state.dataSource.length>1){
                Mobx.getList("/react/all");
                
                this.setState({
                    dataSource: Mobx.dataSource,
                    loading: false
                })
            }
    };


    //用户名输入
    onChangeUserName = (e) => {
        const value = e.target.value;
        this.setState({
            userName: value,
        })
    };
    //用户名搜索
    onSearchUserName = (value) => {
        // console.log(value);
        const { dataSource } = this.state;
        this.setState({
            dataSource: dataSource.filter(item => item.name.indexOf(value) !== -1),
            loading: false,
        })
    };
    //地址级联选择
    Cascader_Select = (value) => {
        const { dataSource } = this.state;
        if (value.length === 0) {
            this.setState({
                address: value,
                dataSource: [],
            });
            this.getData();
        } else {
            this.setState({
                address: value,
                dataSource: dataSource.filter(item => item.address === value.join(' / '))
            });
        }
    };
    //时间选择
    RangePicker_Select = (date, dateString) => {
        // console.log(date, dateString);
        const { dataSource } = this.state;
        const startime = moment(dateString[0]);
        const endtime = moment(dateString[1]);
        if (date.length === 0) {
            this.setState({
                timeRange: date,
                dataSource: [],
            });
            this.getData();
        } else {
            this.setState({
                timeRange: date,
                dataSource: dataSource.filter(item => (moment(item.createtime.substring(0, 10)) <= endtime && moment(item.createtime.substring(0, 10)) >= startime) === true)
            });
        }
    };
    //渲染
    componentDidMount() {
        axios.get('/react/place')
            .then(function (response) {
                response.data.result.map(function (province) {
                    options.push({
                        value: province.name,
                        label: province.name,
                        children: province.city.map(function (city) {
                            return {
                                value: city.name,
                                label: city.name,
                                children: city.area.map(function (area) {
                                    return {
                                        value: area,
                                        label: area,
                                    }
                                })
                            }
                        }),
                    })
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        this.getData();
    }
    //搜索按钮
    btnSearch_Click = () => {

    };
    //重置按钮
    btnClear_Click = () => {
        this.setState({
            userName: '',
            address: '',
            timeRange: '',
            dataSource: [],
            count: 0,
        });
        this.getData();
    };
    //新建信息弹窗
    CreateItem = () => {
        this.setState({
            visible: true,
            isUpdate: false,
        });
        const form = this.form;
        form.resetFields();
    };
    //接受新建表单数据
    saveFormRef = (form) => {
        this.form = form;
    };
    //填充表格行
    handleCreate = () => {
        const { dataSource, count } = this.state;
        const form = this.form;
        console.log(dataSource[dataSource.length-1].key+"我是最后最后想要的key")

        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);
            values.key = dataSource[dataSource.length-1].key+1;
            values.address = values.address.join(" / ");
            values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");

            form.resetFields();
           
            axios.post('/react/add',{values}).then(res=>{
                console.log(res)
                this.setState({
                    visible: false,
                    dataSource: [...dataSource, values],
                    count: count + 1,
                });
            })
        });
    };
    //取消
    handleCancel = () => {
        this.setState({ visible: false });
    };
    //批量删除
    MinusClick = () => {
        const { dataSource, selectedRowKeys } = this.state;
        this.setState({
            dataSource: dataSource.filter(item => !isContains(selectedRowKeys, item.key)),
        });
    };
    //单个删除
    onDelete = (key) => {
        axios.get('/react/delete',{key}).then(res=>{
            const dataSource = [...this.state.dataSource];
            this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
        })
    };
    //点击修改
    editClick = (key) => {
        console.log(key+"数据key")

        const form = this.form;
        const { dataSource } = this.state;
        const index = catchIndex(dataSource, key);
        console.log(index+"计算完毕")
       form.setFieldsValue({
            key: key, 
            name: dataSource[index].name,
            sex: dataSource[index].sex,
            age: dataSource[index].age,
            address: dataSource[index].address.split(' / '),
            phone: dataSource[index].phone,
            email: dataSource[index].email,
            website: dataSource[index].website,
        });
        this.setState({
            visible: true,
            tableRowKey: key,
            isUpdate: true,
        });
    };
    //更新修改
    handleUpdate = () => {
        const form = this.form;
        const { dataSource, tableRowKey } = this.state;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log('Received values of form: ', values);

            values.key = tableRowKey;
            values.address = values.address.join(" / ");
            values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");

            form.resetFields();
            axios.post('/react/update',{values}).then(res=>{
                console.log(res)
                this.setState({
                    visible: false,
                    dataSource: replace(dataSource, tableRowKey, values)
                });
            })
            // this.setState({
            //     visible: false,
            //     dataSource: replace(dataSource, tableRowKey, values)
            // });
        });
    };
    //单选框改变选择
    checkChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys: selectedRowKeys });
    };
    render() {
        const { userName, address, timeRange, dataSource, visible, isUpdate, loading } = this.state;
        const questiontxt = () => {
            return (
                <p>
                    <Icon type="plus-circle-o" /> : 新建信息<br />
                    <Icon type="minus-circle-o" /> : 批量删除
                </p>
            )
        };
        return (
            <div>
                {/* <BreadcrumbCustom paths={['首页','表单']}/> */}
                <div className='formBody'>
                    <Row gutter={16}>
                        <Col className="gutter-row" sm={8}>
                            <Search
                                placeholder="Input Name"
                                prefix={<Icon type="user" />}
                                value={userName}
                                onChange={this.onChangeUserName}
                                onSearch={this.onSearchUserName}
                            />
                        </Col>
                        <Col className="gutter-row" sm={8}>
                            <InputGroup compact>
                                <Cascader style={{ width: '100%' }} options={options} placeholder="Select Address" onChange={this.Cascader_Select} value={address} />
                            </InputGroup>
                        </Col>
                        <Col className="gutter-row" sm={8}>
                            <RangePicker style={{ width: '100%' }} onChange={this.RangePicker_Select} value={timeRange} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <div className='plus' onClick={this.CreateItem}>
                            <Icon type="plus-circle" />
                        </div>
                        <div className='minus'>
                            <Popconfirm title="确定要批量删除吗?" onConfirm={this.MinusClick}>
                                <Icon type="minus-circle" />
                            </Popconfirm>
                        </div>
                        <div className='question'>
                            <Tooltip placement="right" title={questiontxt}>
                                <Icon type="question-circle" />
                            </Tooltip>
                        </div>
                        <div className='btnOpera'>
                            <Button type="primary" onClick={this.btnSearch_Click} style={{ marginRight: '10px' }}>查询</Button>
                            <Button type="primary" onClick={this.btnClear_Click} style={{ background: '#f8f8f8', color: '#108ee9' }}>重置</Button>
                        </div>
                    </Row>
                    <FormTable
                        dataSource={dataSource}
                        checkChange={this.checkChange}
                        onDelete={this.onDelete}
                        editClick={this.editClick}
                        loading={loading}
                    />
                    {isUpdate ?
                        <CollectionCreateForm ref={this.saveFormRef} visible={visible} onCancel={this.handleCancel} onCreate={this.handleUpdate} title="修改信息" okText="更新"
                        /> : <CollectionCreateForm ref={this.saveFormRef} visible={visible} onCancel={this.handleCancel} onCreate={this.handleCreate} title="新建信息" okText="创建"
                        />}
                </div>
            </div>
        )
    }
}



export default Test