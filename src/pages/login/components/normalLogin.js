import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { FormInput } from '../../../components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const NormalLogin = () => {
    const { size } = useSelector(state => state.login);

    return (
        <>
            <FormInput
                formProps={{ name: 'userName', rules: [{ required: true, message: '请输入账号!' }] }}
                prefix={<UserOutlined/>}
                size={size}
            />
            <FormInput
                type={'password'}
                formProps={{ name: 'usePassword', rules: [{ required: true, message: '请输入密码!' }] }}
                prefix={<LockOutlined/>}
                size={size}
            />
        </>
    );
};

export default memo(NormalLogin);
