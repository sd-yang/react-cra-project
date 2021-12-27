import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import baseRouter from './baseRouter';

const AppRouter = () => {
    // 通过角色信息来组织路由
    const { role } = useSelector(state => state.main.userInfo);
    const routers = [...baseRouter];

    // TODO 存储路由数据

    const loopRouters = (list) => {
        if (!list || list.length === 0) return [];
        return list.map(item => {
            if (item.children) {
                return (
                    <Route key={item.path} path={item.path} element={item.component}>
                        {loopRouters(item.children)}
                    </Route>
                )
            }
            return <Route key={item.path} path={item.path} element={item.component}/>
        });
    };

    return (
        <BrowserRouter>
            <Routes>
                {loopRouters(routers)}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;