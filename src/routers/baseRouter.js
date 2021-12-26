import React from "react";
import LayoutPage from '../layout/index';
import NotFound from '../pages/404';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';

const baseRouter = [
    { path: '/login', component: <LoginPage /> },
    {
        path: '/',
        component: <LayoutPage />,
        children: [
            { path: '/', component: <HomePage /> },
            // 匹配任何非空路径
            { path: '*', component: <NotFound /> }
        ]
    },
];

export default baseRouter;
