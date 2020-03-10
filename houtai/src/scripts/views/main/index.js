

//主视图   布局页
import React, { Component } from "react"
import { Layout, //布局
   Menu,   //导航栏菜单
    Icon,
     Badge ,  //徽标
    } from 'antd';
import "./index.scss"
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Hello from "./hello"
import Test from "../test"
import { connect } from "react-redux"
import Mobx from "~/mobx"
import { observer } from "mobx-react"
import { history } from "&"
import Forum from "./forum";
import Hot from "./hot";
const { Header,  //头部
  Sider, //左侧导航
   Content , //右侧内容
  } = Layout;
const { SubMenu } = Menu;
@connect()
@observer
class Main extends React.Component {
  state = {
    collapsed: false,
    selectedKey: '',
  };

  toggle = () => {
    console.log(666)
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout() {
    console.log(666)
    history.push('/login');
  }
  menuClick = e => {
    localStorage.key= e.key;
    console.log( localStorage.key)
    this.setState({
      selectedKey: e.key
    });
  };
  componentWillMount(){
    console.log( localStorage)

    this.setState({
      selectedKey: localStorage.key?localStorage.key:'1'
    });
  }
  render() {
    const {
      dispatch
    } = this.props;
    const { selectedKey } = this.state
    const { peopleList, getList } = Mobx;
    // console.log(peopleList)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            selectedKeys={[selectedKey]}
            onClick={this.menuClick} mode="inline"
          >
            <Menu.Item key="1"

            >
              <Link to={"/main"}><Icon type="home" /><span>首页</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/main/test" />
              <Icon type="desktop" />
              <span>数据</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户中心</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Link to="/main/hot" />
              <Icon type="file" />
              <span>论坛</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, color: 'black', fontSize: 30 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Menu
              mode="horizontal"
              style={{ lineHeight: '64px', float: 'right' }}
            >
              <Menu.Item key="schedule">
                <Link to="">
                  <Badge count={3} overflowCount={99} style={{ height: '15px', lineHeight: '15px' }}>
                    <Icon type="schedule" style={{ fontSize: 16, color: '#1DA57A' }} />
                  </Badge>
                </Link>
              </Menu.Item>
              <SubMenu
                title={<span>
                  <Icon type="user" style={{ fontSize: 16, color: '#1DA57A' }} />{this.props.username}
                </span>}
              >
                <Menu.Item key="logout" style={{ textAlign: 'center' }} className="logout">
                  <span onClick={this.logout}>登出</span>
                </Menu.Item>
              </SubMenu>
            </Menu>
            万达员工管理系统
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path={'/main'} component={Hello} />
              <Route exact path={'/main/test'} component={Test} />
              <Route exact path={'/main/hot'} component={Hot} />
              <Route exact path={'/main/hot/forum'} component={Forum} />
              <Route render={() => (<Redirect to="./main" />)} />
            </Switch>
          </Content>
        </Layout>
      </Layout>

    );
  }
}



export default Main

