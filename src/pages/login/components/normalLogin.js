import React from 'react';
import { useSelector } from 'react-redux';
import { FormInput, FormPassword } from '../../../components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NormalLogin = () => {
    const { size } = useSelector(state => state.login);

    return (
        <>
            <FormInput
                name={'userName'}
                option={{ prefix: <UserOutlined/>, size }}
                rules={[{ required: true, message: '请输入账号!' }]}
            />
            <FormPassword
                name={'usePassword'}
                option={{ prefix: <LockOutlined/>, size }}
                rules={[{ required: true, message: '请输入密码!' }]}
            />
        </>
    );
};

export default NormalLogin;
