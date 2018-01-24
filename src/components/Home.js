import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { connect } from 'dva';
import Rank from './Rank';
import Comments from './Comment/Comments';
import Game from './GameBoard/Game';
import Person from './PersonInfo/Person';

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
  state = {
    ItemIndex: '1',
  }
  getMenu() {
    const menu = this.props.home.isLogin ? (
      <Menu>
        <Menu.Item>
          <a href="##" onClick={this.updateUser.bind(this)}>个人资料</a>
        </Menu.Item>
        <Menu.Item>
          <a href="##">退出登陆</a>
        </Menu.Item>
      </Menu>
    ) : null;
    return menu;
  }
  login() {
    this.props.dispatch({
      type: 'home/r_Login',
    });
  }
  handleClick(event) {
    this.setState({
      ItemIndex: event.key,
    });
  }
  updateUser() {
    this.props.dispatch({
      type: 'home/r_updateUser',
    });
  }
  render() {
    return (
      <Layout className="layout" style={{ position: 'relative', width: '100%', minWidth: '1080px', minHeight: '950px', backgroundColor: '#fff' }}>
        <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Menu
            theme="dark"
            onClick={this.handleClick.bind(this)}
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">排行榜</Menu.Item>
            <Menu.Item key="3">留言板</Menu.Item>
          </Menu>
          <div style={{ lineHeight: '64px', padding: 12 }}>
            <Dropdown overlay={this.getMenu.bind(this)} onClick={this.login.bind(this)}>
              <Avatar size="large" icon="user" />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '100px 100px 0', height: '100%', position: 'relative' }}>
          { this.state.ItemIndex === '1'
            ? <Game />
            : (this.state.ItemIndex === '2' ? <Rank /> : <Comments />)}
        </Content>
        <Person />
        <Footer style={{ textAlign: 'center' }}> React 2048 game created by ll </Footer>
      </Layout>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Home);

