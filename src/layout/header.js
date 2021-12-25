import React from 'react';
import { Space, Avatar, Dropdown, Menu } from 'antd';

const { subMenu } = Menu;

const HeaderNode = () => {

    const menu = (
        <Menu>

        </Menu>
    )
    return (
        <div className={'headerWrap'}>
            <Space className={'rightWrap'}>
                <Avatar>U</Avatar>
            </Space>
        </div>
    )
};

export default HeaderNode;
