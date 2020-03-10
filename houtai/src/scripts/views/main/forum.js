

//评论页
import React, { Component } from "react"
import {
    Card,
    Avatar,//头像
    Comment, //评论 
    Form, Button, List, Input, Divider,
    Empty, //空白层
} from 'antd';
import moment from 'moment';
import { axios } from "&"
import Mobx from "~/mobx"
import { observer } from "mobx-react"
const { TextArea } = Input;

var a = function () {
    console.log(this)
}
a()
var person = { a: 1, b: 2 }
delete person.a
console.log(person)

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? '人已吐槽' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                发表评论
        </Button>
        </Form.Item>
    </div>
);
const UserList = ["http://47.104.240.15/images/1.jpg", 'http://47.104.240.15/images/2.jpg', 'http://47.104.240.15/images/3.jpg', 'http://47.104.240.15/images/4.jpg', 'http://47.104.240.15/images/5.jpg', 'http://47.104.240.15/images/6.jpg', 'http://47.104.240.15/images/7.jpg', 'http://47.104.240.15/images/8.jpg', 'http://47.104.240.15/images/9.jpg', 'http://47.104.240.15/images/10.jpg', 'http://47.104.240.15/images/11.jpg', 'http://47.104.240.15/images/12.jpg', 'http://47.104.240.15/images/13.jpg', 'http://47.104.240.15/images/14.jpg', 'http://47.104.240.15/images/16.jpg', 'http://47.104.240.15/images/g1.gif', 'http://47.104.240.15/images/g2.gif', 'http://47.104.240.15/images/g3.gif']
const NameList = ['狗蛋', '铁蛋', '驴二傻', '王二麻子', '李大拐子', '独立团李云龙', '张大彪', '我楚云飞一定棒棒场子', '栓子', '狗剩', '山炮', '尼古纳斯赵四', '屎蛋', '你爸临死前', '栓狗', '小黑', '自挂东南枝', '猪儿虫', '牛妹', '冬狗']

@observer
class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: UserList[0],
            name: '',
            comments: [],
            submitting: false,
            value: '',
            news: '',
            author: '',
        };
    }


    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });
        
        var values = {
            author: this.state.author,
            avatar: this.state.user,
            content: this.state.value,
            datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        if (this.state.author == '') {
            values = {...values,author: '好名字都让狗取了'}
        }
        console.log(values)
        axios.post('/react/comment/add', {
            _id: new URLSearchParams(this.props.location.search).get('_id'),
            values
        }).then(res => {
            setTimeout(() => {
                this.setState({
                    submitting: false,
                    value: '',
                    author: '',
                    comments: [
                        values,
                        ...this.state.comments,
                    ],
                });
            }, 1000);
        })

    };
    //昵称输入框
    handleSetAuthor = e => {
        console.log(e.target.value)
        this.setState({
            author: e.target.value
        })
    }
    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    //换头
    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            author: index < NameList.length - 1 ? NameList[index + 1] : NameList[0],
        });
    };
    componentDidMount() {
        var index = new URLSearchParams(this.props.location.search).get('key')
        console.log(index)
        if (!Mobx.forum.length > 0) {
            Mobx.getForum('/react/comment', () => {
                console.log(Mobx.forum[index].comment)
                this.setState({
                    comments: Mobx.forum[index].comment.reverse(),
                    news: Mobx.forum[index].news
                })
                console.log(this.state.news)
            })
        } else {
            console.log(Mobx.forum[index].comment)
            this.setState({
                comments: Mobx.forum[index].comment.reverse(),
                news: Mobx.forum[index].news
            })
            console.log(this.state.news)
        }
    }
    render() {
        const { comments, submitting, value, news, author } = this.state;
        const { forum } = Mobx;
        return (
            <div style={{ width: "100%" }}>
                <p style={{ fontSize: 18, color: '#000', lineHeight: '30px', letterSpacing: '3px' }}>&emsp;&emsp;{news}</p>
                {!comments.length > 0 && <Empty
                    image="http://47.104.240.15/images/tucao.jpg"
                    imageStyle={{
                        height: 60,
                        display: 'inline-block',
                        magin: 'auto'
                    }}
                    description={
                        <span>
                            <a>客官:还没有评论哟~</a>
                        </span>
                    }
                />}
                {news && comments.length > 0 && <CommentList comments={comments} />}
                <Divider orientation="left">
                    留言区-快点头像看看哪款适合你吧~
            </Divider>

                <p><Input placeholder="请输入你的昵称" value={author} onChange={this.handleSetAuthor} style={{ marginLeft: '70px', maxWidth: 227, cursor: 'pointer' }}></Input></p>
                <Comment
                    avatar={
                        <Avatar onClick={this.changeUser} style={{ backgroundColor: this.state.color, verticalAlign: 'middle', width: 60, height: 60 }} size="large">
                            <img style={{ width: 60, height: 60 }} src={this.state.user} alt="" />
                        </Avatar>
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </div>

        )
    }
}


export default Forum

