import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setRouters } from "../store/main";
import { filterRoutesByRole, filterMenuList } from "../utils";
import LoginPage from "../pages/login";
import LayoutPage from "../layout";
import config from './config';

const AppRouter = () => {
    const dispatch = useDispatch();
    // 通过角色信息来组织路由
    const { role } = useSelector(state => state.main.userInfo);
    const routers = filterRoutesByRole(config, role);

    useEffect(() => {
        // 存储路由数据
        dispatch(setRouters(filterMenuList(config, role)));
    }, []);

    const loopRouters = (list) => {
        if (!list || list.length === 0) return [];
        return list.reduce((total, item) => {
            if (item.children) return [...loopRouters(item.children), ...total];
            if (!item.path) return total;
            return [...total, <Route key={item.path} path={item.path} element={item.component}/>]
        }, []);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route key={'login'} path={'/login'} element={<LoginPage />}/>
                <Route key={'layout'} path={'/'} element={<LayoutPage />}>
                    {loopRouters(routers)}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;