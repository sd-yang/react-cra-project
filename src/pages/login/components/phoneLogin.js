import React from 'react';
import { Button, Space } from 'antd';
import { useSelector } from 'react-redux';
import { FormInput } from '../../../components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const PhoneLogin = () => {
    const { size } = useSelector(state => state.login);

    return(
        <>
            <FormInput name={'userPhone'} option={{ prefix: <UserOutlined />, size }}/>
            <Space>
                <FormInput name={'userCode'} option={{ prefix: <LockOutlined />, size }}/>
                <Button size={size} style={{ marginBottom: 24 }}>获取验证码</Button>
            </Space>
        </>
    )
};

export default PhoneLogin;
