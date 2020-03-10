
//论坛页
import React, { Component } from "react"
import { Card, //卡片
     Icon, 
       Button,
         Input,
           Row, //行
           Col, //列
            Divider,   //分割线
             Popover,  //点击评分弹出的气泡卡片
              Rate ,  //评分
            } from 'antd';
import moment from 'moment';
import { axios, baseURL } from "&"
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Mobx from "~/mobx"
import { observer } from "mobx-react"
import Forum from "./forum"
import { history } from "&"
import CollectionCreateForm from "../../components/hotForm";

const { TextArea } = Input;
const { Meta } = Card;

const desc = ['智障小编', '有点意思', '哎哟不错哦', '给小编加鸡腿', '胜读十年书'];
@observer
class Hot extends Component {
    constructor() {
        super();
        this.state = {
            pic: null,
            value: 3,
        }
    }
    state = {
        visible: false,
    };

    //评分函数   写到此处 mobx无法运行
    handleChange = value => {
        this.setState({ value });
        console.log(value)
        var index = this.rate.props.index
        axios.post('/react/rate', { rate: value, _id: this.rate.props._id }).then(res => {
            Mobx.rateAdd(index, value)
        })
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    //写到此处     写到图片如何在本地访问    如何将表单提交的content传到后端去   已写完
    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            const content = { ...values, img: values.img[0].name }
            var data = new FormData();
            data.append("avatar", values.img[0].originFileObj);
            axios.post(
                "/react/uploadImg",
                data
            ).then(res => {
                var path = res.data.path;
                axios.post("/react/content", { ...content, img: path }).then(content => {
                    Mobx.getForum('/react/comment')
                })
            })
            form.resetFields();
            this.setState({ visible: false });
        });
    };
    //上传文件函数
    normFile = e => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    componentDidMount() {
        if (!Mobx.forum.length > 0) {
            Mobx.getForum('/react/comment')
        }
    }
    //不知道是什么函数
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleClick = () => {
        this.fileImg.click();
    }
    render() {
        const { forum } = Mobx;
        const {
            pic,
            value
        } = this.state;
        return (
            <div style={{ width: "100%" }}>
                <h1>今日头条</h1>
                <Divider style={{ marginBottom: 50 }} orientation="left">
                    <Button type="primary" onClick={this.showModal}>
                        分享一下吧
                    </Button>
                    <CollectionCreateForm
                        wrappedComponentRef={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onCreate={this.handleCreate}
                        normFile={this.normFile}
                    />
                </Divider>
                <Row gutter={[16, 16]}>
                    {
                        forum && forum.map((c, i) => {
                            return (
                                <Col key={i} span={6}>
                                    <Card
                                        hoverable
                                        style={{ width: "100%" }}
                                        cover={<img alt="example" src={c.img.replace(/public/, baseURL)} style={{ width: "100%", height: 200 }} />}
                                        actions={[
                                            <Link to={`/main/hot/forum?key=${i}&_id=${c._id}`}> <Icon type="edit" key="edit" theme="twoTone" twoToneColor="#52c41a" onClick={this.showModal} /></Link>,

                                            <Popover content={
                                                <span>
                                                    <Rate
                                                        allowClear={false}
                                                        ref={el => this.rate = el}
                                                        _id={c._id}
                                                        index={i}
                                                        character={<Icon type="heart" />} tooltips={desc} onChange={this.handleChange} value={value} />
                                                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                                </span>
                                            } title="大爷请评分"
                                            >
                                                <Icon type="like" key="like"  theme="twoTone" />
                                            </Popover>,
                                        ]}
                                    >
                                        <Meta title={c.title} />
                                        <p style={{marginTop:20}}>热度   <span style={{color:'orange',fontSize:20}}>{c.hot}</span>   +</p>
                                   
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>

            </div>
        )
    }
}


export default Hot
