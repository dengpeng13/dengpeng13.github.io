


import React, { Component } from "react"
// import reqwest from 'reqwest';
import { Table, Divider, Tag, Icon, Popconfirm, Modal, Button, Form,  Row, Col,Tooltip} from 'antd';
import CollectionCreateForm from "./creat"
import moment from 'moment';

const FormItem = Form.Item;

const action = {
  title: '操作',
  dataIndex: 'opera',
  width:100,
  render: (text, record) =>
      <div className='opera'>
          <span onClick={() => editClick(record.key)}>
               <Icon type="edit" /> 修改
          </span><br />
          <span><Popconfirm title="确定要删除吗?" onConfirm={() => onDelete(record.key)}><Icon type="minus-square-o" /> 删除 </Popconfirm></span>
      </div>
}

const data = [
  {
    key: '1',
    name: 'jeef',
    type: 'VUE',
    proName: '后台管理系统',
    address: '47.104.240.15/jeef/vue/#/',
    good: '毫无亮点,一坨x',
    other: '账号1,密码1',
    tags: ['棒棒哒', 'developer'],
  },
  {
    key: '2',
    name: 'kewn',
    type: "react",
    proName: '卖座电影',
    address: '47.104.240.15/jeef/vue/#/',
    good: '棒棒哒',
    other: '账号2,密码2',
    tags: ['棒棒哒', 'developer'],
  },

];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
export default class Mine extends Component {

  state = {
    filteredInfo: null,
    sortedInfo: null,
    visible: false,//控制对话框显影
    isUpdate: false,
    dataSource:data,
    count:2
  };

  //对话框自带函数
    //新建信息弹窗
    CreateItem = () => {
      this.setState({
          visible: true,
          isUpdate: false,
      });
      const form = this.form;
      // form.resetFields();
  };
  //接受新建表单数据
  saveFormRef = (form) => {
    this.form = form;
};
  //填充表格行

  //今天写到这里    表格田聪失败
  handleCreate = () => {
    const { dataSource, count } = this.state;
    const form = this.form;
    form.validateFields((err, values) => {
        if (err) {
            return;
        }
     
        values.key = count+1;
        values.action=action;  
        values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");
        form.resetFields();
        this.setState({
          visible: false,
          dataSource: [...dataSource, values],
          count:count+1
      });
      console.log('Received values of form: ', values);
    });
};
  //点击修改
  editClick = (key) => {
    console.log(666)
    const form = this.form;
    const { dataSource } = this.state;
    const index = catchIndex(dataSource, key);
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
    const { dataSource, tableRowKey,} = this.state;
    form.validateFields((err, values) => {
        if (err) {
            return;
        }
        console.log('Received values of form: ', values);

        values.key = tableRowKey;
        values.createtime = moment().format("YYYY-MM-DD hh:mm:ss");

        form.resetFields();
        this.setState({
            visible: false,
            dataSource: replace(dataSource, tableRowKey, values)
        });
    });
};
//取消
handleCancel = () => {
    this.setState({ visible: false });
};
  /////

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '框架',
        dataIndex: 'type',
        key: 'type',
        filters: [{ text: 'vue', value: 'vue' }, { text: 'react', value: 'react' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        width: 80,
      },
      {
        title: '项目名称',
        dataIndex: 'proName',
        key: 'proName',
        ellipsis: true,
      },
      {
        title: '项目地址',
        dataIndex: 'address',
        key: 'address',
        ellipsis: false,
      },
      {
        title: '技术亮点',
        dataIndex: 'good',
        key: 'good',
        ellipsis: false,
      },
      {
        title: '备注',
        dataIndex: 'other',
        key: 'other',
        ellipsis: false,
      },
      {
        title: 'time',
        key: 'time',
        dataIndex: 'time',
        ellipsis: false,
      },
      {
        title: '操作',
        dataIndex: 'opera',
        width:100,
        render: (text, record) =>
            <div className='opera'>
                <span onClick={() => editClick(record.key)}>
                     <Icon type="edit" /> 修改
                </span><br />
                <span><Popconfirm title="确定要删除吗?" onConfirm={() => onDelete(record.key)}><Icon type="minus-square-o" /> 删除 </Popconfirm></span>
            </div>
      },
    ];
    const { visible, isUpdate,dataSource ,count} = this.state;
    const editClick = this.editClick;
    return (
      <div>
        <Row gutter={16}>
          <div className='plus' onClick={this.CreateItem}>
            <Icon type="plus-circle" />
          </div>
          <div className='minus'>
            <Popconfirm title="确定要批量删除吗?" onConfirm={this.MinusClick}>
              <Icon type="minus-circle" />
            </Popconfirm>
          </div>
          <div className='btnOpera'>
            <Button type="primary" onClick={this.btnSearch_Click} style={{ marginRight: '10px' }}>查询</Button>
            <Button type="primary" onClick={this.btnClear_Click} style={{ background: '#f8f8f8', color: '#108ee9' }}>重置</Button>
          </div>
        </Row>
        <Table columns={columns}
          rowSelection={rowSelection}
          dataSource={dataSource}
        />

        {isUpdate ?
          <CollectionCreateForm ref={this.saveFormRef} visible={visible} onCancel={this.handleCancel} onCreate={this.handleUpdate} title="修改信息" okText="更新"
          /> : <CollectionCreateForm ref={this.saveFormRef} visible={visible} onCancel={this.handleCancel} onCreate={this.handleCreate} title="新建信息" okText="创建"
          />}
      </div>
    )
  }
}