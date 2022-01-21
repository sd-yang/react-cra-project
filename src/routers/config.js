import React from "react";
import NotFound from '../pages/404';
import Dashboard from '../pages/dashboard';
import SearchList from "../pages/searchList";
import DetailInfo from '../pages/detailInfo';

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
        title: '列表详情',
        icon: 'icon-liebiao',
        children: [
            {
                path: '/list/search',
                title: '查询列表',
                component: <SearchList />
            },
            {
                path: '/list/detail/:id',
                title: '详情页',
                component: <DetailInfo />
            },
        ]
    },
    {
        title: '配置中心',
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
