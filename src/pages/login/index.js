import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const routerTo = useNavigate();

    const handleToLogin = () => {
        routerTo('/')
    }

    return (
        <div>
            Login 登陆页
            <Button onClick={handleToLogin}>登陆</Button>
        </div>
    )
};

export default LoginPage;
