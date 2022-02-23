import React from 'react';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { useSelector } from "react-redux";
import Iconfont from "../components/iconfont";

const { SubMenu } = Menu;

const Sidebar = () => {
    const navigate = useNavigate();
    // 根据路由数据生成对应的菜单
    const menuList = useSelector(state => state.main.routers);

    const menuNodeMap = (list) => {
        if (!list || list.length === 0) return [];
        return list.map(item => {
            if (item.children && item.children.length > 0) {
                return <SubMenu key={item.title} title={item.title} icon={<Iconfont type={item.icon}/>}>
                    {menuNodeMap(item.children)}
                </SubMenu>
            } else {
                return <Menu.Item key={item.path} title={item.title}>
                    {item.title}
                </Menu.Item>
            }
        });
    };

    return (
        <>
            <Menu
                mode={'inline'}
                defaultOpenKeys={['Dashboard']}
                defaultSelectedKeys={['/']}
                onClick={(item) => navigate(item.key)}
            >
                {menuNodeMap(menuList)}
            </Menu>
        </>
    )
};

export default Sidebar;
