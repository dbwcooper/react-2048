import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import Rank from './Rank';
import Comments from './Comment/Comments';
import Game from './GameBoard/Game';


const { Header, Content, Footer } = Layout;

class Home extends React.Component {
  state = {
    ItemIndex: 1,
  }
  handleClick(event) {
    this.setState({
      ItemIndex: event.key,
    });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人资料</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出登陆</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className="layout" style={{ position: 'fixed', width: '100%', height: '100%' }}>
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
            <Dropdown overlay={menu} >
              <Avatar size="large" icon="user" />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ padding: '50px', height: '100%', position: 'relative' }}>
          { this.state.ItemIndex === '1'
            ? <Game />
            : (this.state.ItemIndex === '2' ? <Rank /> : <Comments />)}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
      </Layout>
    );
  }
}

export default Home;
