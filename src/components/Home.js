import React from 'react';
import { Layout, Menu } from 'antd';
import Rank from './Rank';
import Comments from './Comment/Comments';

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
    return (
      <Layout className="layout" style={{ position: 'fixed', width: '100%', height: '100%' }}>
        <Header>
          <div className="logo" />
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
        </Header>
        <Content style={{ padding: '50px', height: '100%' }}>
          { this.state.ItemIndex === '1'
      ? (<div style={{ background: '#fff', padding: 24 }}>Content</div>)
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
