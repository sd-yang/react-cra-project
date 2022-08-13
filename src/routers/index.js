import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setRouters } from '../store/main';
import { filterRoutesByRole, filterMenuList } from '../utils';
import zhCN from 'antd/lib/locale/zh_CN';

import { KeepAliveProvider } from '../components/keepAlive';
import LoginPage from '../pages/login';
import LayoutPage from '../layout';
import config from './config';

const AppRouter = () => {
  const dispatch = useDispatch();
  // 通过角色信息来组织路由
  const { userInfo, theme } = useSelector((state) => state.main);
  const routers = filterRoutesByRole(config, userInfo.role);

  useEffect(() => {
    // 存储路由数据
    dispatch(setRouters(filterMenuList(config, userInfo.role)));
  }, []);

  const loopRouters = (list) => {
    if (!list || list.length === 0) return [];
    return list.reduce((total, item) => {
      if (item.children) return [...loopRouters(item.children), ...total];
      if (!item.path) return total;
      return [
        ...total,
        <Route key={item.path} path={item.path} element={item.component} />,
      ];
    }, []);
  };

  return (
    <ConfigProvider locale={zhCN} prefixCls={theme}>
      <BrowserRouter>
        <KeepAliveProvider>
          <Routes>
            <Route key={'login'} path={'/login'} element={<LoginPage />} />
            <Route key={'layout'} path={'/'} element={<LayoutPage />}>
              {loopRouters(routers)}
            </Route>
          </Routes>
        </KeepAliveProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default AppRouter;
