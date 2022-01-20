import React, { memo, useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useRequest } from '../../../utils/request';
import { FormInput } from '../../../components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getPhoneCode } from '../../../server/login';

const PhoneLogin = (props) => {
    const { size } = useSelector(state => state.login);
    const { loading, run } = useRequest(getPhoneCode, { manual: true });
    const [disabled, setDisabled] = useState(false);
    const [timeNum, setTimeNum] = useState(60);
    let timer;

    useEffect(() => {
        return () => {
            clearInterval(timer);
            timer = null;
        };
    }, []);

    const getCode = () => {
        props.form.validateFields(['userPhone']).then(values => {
            run(values.userPhone).then(() => {
                setDisabled(true);
                computedTime();
            });
        });
    };

    const computedTime = () => {
        setTimeNum(60);
        let time = 60;
        timer = setInterval(() => {
            if (time === 1) {
                clearInterval(timer);
                setDisabled(false);
                return;
            }
            time -= 1;
            setTimeNum(time);
        }, 1000);
    };

    return (
        <>
            <FormInput
                name={'userPhone'}
                required={true}
                option={{ prefix: <UserOutlined/>, size }}
                rules={[{ required: true, message: '请输入手机号!' }]}
            />
            <Space>
                <FormInput
                    name={'userCode'}
                    required
                    option={{ prefix: <LockOutlined/>, size }}
                    rules={[{ required: true, message: '验证码不能为空!' }]}
                />
                <Button
                    size={size}
                    style={{ marginBottom: 24 }}
                    onClick={getCode}
                    loading={loading}
                    disabled={disabled}
                >
                    {
                        disabled ? `${timeNum}秒后重新获取` : '获取验证码'
                    }
                </Button>
            </Space>
        </>
    );
};

export default memo(PhoneLogin);
