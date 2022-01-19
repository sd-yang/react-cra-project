import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Row, Form, Tabs, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ProForm } from '../../components';
import NormalLogin from './components/normalLogin';
import PhoneLogin from './components/phoneLogin';
import './index.less';

const { TabPane } = Tabs;

const LoginPage = () => {
    const routerTo = useNavigate();
    const [form] = Form.useForm();
    const { size } = useSelector(state => state.login);

    const handleToLogin = () => {
        routerTo('/')
    }

    return (
        <div className={'loginWrap'}>
            <div className={'loginContent'}>
                <div className={'titleImg'}>
                    <img src="/logo192.png" alt="logo"/>
                    Manage System
                    <div className={'desc'}>好用便捷的React管理系统</div>
                </div>

                <ProForm form={form}>
                    <Tabs centered={true} destroyInactiveTabPane={true}>
                        <TabPane key={'normal'} tab={'账户密码登陆'}>
                            <NormalLogin />
                        </TabPane>
                        <TabPane key={'phone'} tab={'手机号登陆'}>
                            <PhoneLogin />
                        </TabPane>
                    </Tabs>
                </ProForm>

                <Row justify={'space-between'} style={{ marginBottom: 24 }}>
                    <Checkbox.Group options={[{ label: '自动登陆', value: 'auto' }]}/>
                    <a>忘记密码？</a>
                </Row>

                <Button onClick={handleToLogin} type={'primary'} block size={size}>
                    登录
                </Button>
            </div>
        </div>
    )
};

export default LoginPage;
