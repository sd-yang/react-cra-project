import React from "react";
import NotFound from '../pages/404';
import Dashboard from '../pages/dashboard';

const config = [
    {
        title: 'Dashboard',
        icon: 'icon-shujudapan',
        children: [
            {
                path: '/dashboard/data',
                title: '数据大盘',
                component: <Dashboard />
            },
            {
                path: '/dashboard/workspace',
                title: '工作台',
                component: <Dashboard />
            },
        ]
    },
    {
        title: '列表页',
        icon: 'icon-liebiao',
        children: [
            {
                path: '/list/search',
                title: '查询列表',
                component: <Dashboard />
            },
            {
                path: '/list/base',
                title: '标准列表',
                component: <Dashboard />
            },
        ]
    },
    {
        title: '个人页',
        icon: 'icon-geren',
        children: [
            {
                path: '/account/center',
                title: '个人中心',
                component: <Dashboard />
            },
            {
                path: '/account/setting',
                title: '个人设置',
                component: <Dashboard />
            },
        ]
    },
    { path: '*', component: <NotFound /> }
];

export default config;
