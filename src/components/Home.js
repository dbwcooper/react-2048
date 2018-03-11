import React from 'react';
import { Layout, Menu, Avatar, Popover, Button } from 'antd';
import { connect } from 'dva';
import Rank from './Rank';
import Comments from './Comment/Comments';
import Game from './GameBoard/Game';
import Person from './PersonInfo/Person';

const { Header, Content, Footer } = Layout;
class Home extends React.Component {
  state = {
    ItemIndex: '1',
    displayModal: false,
  }
  componentWillUnmount() {
    this.props.dispatch({ type: 'e_pushScore' });
  }
  getContent() {
    if (this.state.ItemIndex === '1') {
      return (<Game {...this.props} />);
    } else if (this.state.ItemIndex === '2') {
      return (<Rank {...this.props} />);
    } else if (this.state.ItemIndex === '3') {
      return (<Comments />);
    }
  }
  handleClick(event) {
    this.setState({
      ItemIndex: event.key,
    });
  }
  // 控制用户信息的显示隐藏
  showModal = () => {
    this.setState({
      displayModal: !this.state.displayModal,
    });
  }
  loginout = () => {
    // 注销用户 删除cookie 然后删除分数
    this.props.dispatch({ type: 'home/e_loginout' });
  }
  userContent = () => {
    return (<div>
      <p> 用户: {this.props.home.username}</p>
      <Button onClick={() => this.loginout()}>注销</Button>
    </div>);
  }
  render() {
    return (
      <Layout className="layout" style={{ position: 'relative', width: '100%', minWidth: '1080px', minHeight: '950px', backgroundColor: '#fff' }}>
        <Person {...this.props} displayModal={this.state.displayModal} showModal={this.showModal} />
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
          <div style={{ lineHeight: '64px', padding: '12px', cursor: 'pointer' }} >
            {this.props.home.username
              ? <Popover
                content={this.userContent()}
                title="用户信息"
                trigger="hover"
                placement="bottomRight"
              >
                <Avatar size="large" icon="user" onClick={this.hide} />
              </Popover>
              : <Avatar size="large" icon="user" onClick={this.showModal} />
            }
          </div>
        </Header>
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

