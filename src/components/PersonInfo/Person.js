import React, { PureComponent } from 'react';
import { Form, Input, Icon, Button, Modal } from 'antd';

const FormItem = Form.Item;
class NormalLoginForm extends PureComponent {
  state = {
    isRegister: false,
    confirmDirty: false,
  }
  // 每次用户在确认密码框输入时都会进行一次判断, 判断当前框内是否有值
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  // 判断两次输入的密码是否一致
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致 !');
    } else {
      callback();
    }
  }
  // 用户输入密码时判断输入的密码是否与resetpassowrd框内的密码一致
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['resetPassword'], { force: true });
    }
    callback();
  }

  // 处理用户提交
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let types = 'home/e_login';
        if (this.state.isRegister) types = 'home/e_register';
        this.props.dispatch({ type: types, payload: values });
        // 关闭modal
        this.props.showModal();
      }
    });
  }
  // 用户注册
  register = (e) => {
    e.preventDefault();
    this.setState({
      isRegister: !this.state.isRegister,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="用户信息"
        visible={this.props.displayModal}
        onOk={this.handleSubmit}
        onCancel={this.props.showModal}
      >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名 !' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入你的密码 !' },
                {
                  validator: this.checkConfirm,
                }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />,
            )}
          </FormItem>
          <FormItem>
            {this.state.isRegister ? getFieldDecorator('newpass', {
              rules: [{
                required: true, message: '请再次输入你的密码 !',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Reset Password" onBlur={this.handleConfirmBlur} />,
            ) : null}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              {this.state.isRegister ? '注册' : '登录'}
            </Button>
            <a href="##" style={{ paddingLeft: 16 }} onClick={this.register}>
              {this.state.isRegister ? '已有账户' : '还没有账户?'}
            </a>
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const Person = Form.create()(NormalLoginForm);

export default Person;
