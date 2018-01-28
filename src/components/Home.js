import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Modal } from 'antd';
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
  getContent() {
    if (this.state.ItemIndex === '1') {
      return (<Game />);
    } else if (this.state.ItemIndex === '2') {
      return (<Rank />);
    } else if (this.state.ItemIndex === '3') {
      return (<Comments />);
    }
  }
  handleClick(event) {
    this.setState({
      ItemIndex: event.key,
    });
  }
  updateLogin() {
    this.props.dispatch({
      type: 'home/r_updateLogin',
    });
  }
  handleOk() {
    // 提交弹出层填写的内容person
    this.props.dispatch({
      type: 'home/e_submitPerson',
    });
  }
  handleCancel() {
    // 隐藏弹出层
    this.props.dispatch({
      type: 'home/r_updateLogin',
    });
  }
  render() {
    return (
      <Layout className="layout" style={{ position: 'relative', width: '100%', minWidth: '1080px', minHeight: '950px', backgroundColor: '#fff' }}>
        <Modal
          title="用户信息"
          visible={this.props.home.isLogin}
          onOk={this.handleCancel.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <Person />
        </Modal>
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
          <div style={{ lineHeight: '64px', padding: 12 }} >
            <Avatar size="large" icon="user" onClick={this.updateLogin.bind(this)} />
          </div>
        </Header>
        {/* <Person {...this.props} /> 为什么放在这里就不行 */}
        <Content style={{ margin: '100px 100px 0', height: '100%', position: 'relative' }}>
          {this.getContent()}
        </Content>
        <Footer style={{ textAlign: 'center' }}> React 2048 game created by ll </Footer>
      </Layout>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Home);

