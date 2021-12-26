import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

const { Item, Divider } = Menu;

const UserInfo = () => {
    const navigate = useNavigate();

    const handleMenu = ({ key }) => {
        if (key === 'signOut') {
            // TODO 退出登陆
            navigate('/login');
        }
    }

    const menu = (
        <Menu onClick={handleMenu}>
            <Item key={'center'}>
                <Link to={'/account/center'}>
                    <UserOutlined/> 个人中心
                </Link>
            </Item>
            <Item key={'setting'}>
                <Link to={'/account/setting'}>
                    <SettingOutlined/> 个人设置
                </Link>
            </Item>
            <Divider/>
            <Item key={'signOut'}>
                <LoginOutlined/> 退出登陆
            </Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <div className={'user'}>
                <Avatar>U</Avatar>
                <span className={'name'}>UserName</span>
            </div>
        </Dropdown>
    )
};

export default UserInfo;

