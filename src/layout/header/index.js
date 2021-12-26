import React from 'react';
import { Space } from 'antd';
import Notices from "./notices";
import UserInfo from "./userInfo";

const HeaderNode = () => {

    return (
        <div className={'headerWrap'}>
            <h2 className={'title'}>Management System</h2>
            <Space className={'rightWrap'}>
                <Notices />
                <UserInfo />
            </Space>
        </div>
    )
};

export default HeaderNode;
