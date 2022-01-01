import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const initMenu = [
    { key: 'Home', title: '数据大盘', icon: <HomeOutlined/> },
    // {
    //     key: 'sub1',
    //     title: 'Navigation 1',
    //     children: [
    //         { key: '4', title: 'Option 4' }
    //     ]
    // },
];

const Sidebar = () => {
    // TODO 根据路由数据生成对应的菜单
    const [menuList, setMenuList] = useState(initMenu);

    const menuNodeMap = (list) => {
        if (!list || list.length === 0) return [];
        return list.map(item => {
            if (item.children && item.children.length > 0) {
                return <SubMenu key={item.key} title={item.title} icon={item.icon}>
                    {menuNodeMap(item.children)}
                </SubMenu>
            } else {
                return <Menu.Item key={item.key} title={item.title} icon={item.icon}>
                    {item.title}
                </Menu.Item>
            }
        });
    }

    return (
        <>
            <Menu
                theme={'light'}
                mode={'inline'}
                selectedKeys={['Home']}
            >
                {menuNodeMap(menuList)}
            </Menu>
        </>
    )
};

export default Sidebar;
