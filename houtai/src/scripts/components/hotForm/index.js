

//论坛页面  上传话题的表单

import { Button,
     Modal,  //弹出对话框
     Form,  //表单
     Input, 
     Upload , //图片上传
     Icon ,
     message , //提示
    } from 'antd';
import React, { Component } from "react"
import "./index.scss"
import {baseURL} from "&"
const { TextArea } = Input;   //文本输入框
const LOCAL_SERVER = `${baseURL}react/upload`;


const props = {
    name: 'file',
    listType: 'picture',
    multiple: true,
    action: LOCAL_SERVER,
    onChange(info) {
        const status = info.file.status;
        if (status !== '正在上传') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} 图片上传成功`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 图片上传失败`);
        }
    },
};
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {

        render() {
            const { visible, onCancel, onCreate, form ,normFile} = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Create a new collection"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="title">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: '请输入热点标题!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="news">
                            {getFieldDecorator('news', {
                                rules: [{ required: true, message: '请输入内容!' }],
                            })(<TextArea />)}
                        </Form.Item>
                        <Form.Item label="img">
                            {getFieldDecorator('img', {
                                valuePropName: 'fileList',
                                getValueFromEvent:normFile,
                            })(
                                <Upload.Dragger {...props}  name="files" >
                                    <p className="ant-upload-drag-icon">
                                        <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">无图无真相</p>
                                    <p className="ant-upload-hint">本地文件服务</p>
                                </Upload.Dragger>,
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);



export default CollectionCreateForm