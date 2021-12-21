import React, { useState } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const initMenu = [
    { key: 1, title: 'Option 1' },
    { key: 2, title: 'Option 2' },
    { key: 3, title: 'Option 3' },
    {
        key: 'sub1',
        title: 'Navigation 1',
        children: [
            { key: '4', title: 'Option 4' }
        ]
    },
];

const Sidebar = () => {
    const [menuList, setMenuList] = useState(initMenu);

    const menuNodeMap = (list) => {
        if (!list || list.length === 0) return [];
        return list.map(item => {
            if (item.children && item.children.length > 0) {
                return <SubMenu key={item.key} title={item.title}>
                    {menuNodeMap(item.children)}
                </SubMenu>
            } else {
                return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
            }
        });
    }

    return (
        <>
            <Menu
                theme={'light'}
                mode={'inline'}
            >
                {menuNodeMap(menuList)}
            </Menu>
        </>
    )
};

export default Sidebar;
