import React, { Component } from 'react'
import { NavBar, Input, List, Button } from 'antd-mobile'
import { phoneReg, codeReg } from '../../config/Reg'
export default class Login extends Component {
    state = {
        'phone': '',
        'code': '',
    }
    back = () => {
        console.log(1);
    }
    getYzm = () => {
        console.log(2);
    }
    login = () => {
        const { phone, code } = this.state;
        console.log('login', phone, 'code', code);
        if (!phone) return alert('请输入手机号')
        if (!code) return alert('请输入验证码')

    }
    saveData = (type) => {
        return (value) => {
            if (type === 'phone' && !phoneReg.test(value)) value = ''
            if (type === 'code' && !codeReg.test(value)) value = ''
            this.setState({ [type]: value })
        }
    }

    render() {
        return (
            <div>
                <NavBar style={{
                    height: '50px'
                }} onBack={this.back}>手机验证码登录</NavBar>
                <List
                    style={{
                        prefixWidth: '6em',
                    }}
                >
                    <List.Item prefix='用户名'>
                        <Input placeholder='请输入用户名' onChange={this.saveData('phone')} clearable />
                    </List.Item>

                    <List
                        style={{
                            prefixWidth: '6em',
                        }}
                    >
                        <List.Item prefix='短信验证码' extra={<a onClick={this.getYzm}>发送验证码</a>}>
                            <Input onChange={this.saveData('code')} placeholder='请输入验证码' clearable />
                        </List.Item>

                    </List>
                </List>
                <Button block color='primary' size='large' onClick={this.login}> 登录</Button>
            </div>
        )
    }
}
