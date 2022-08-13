import React from 'react';
import NotFound from '../pages/404';
import Dashboard from '../pages/dashboard';
import SimpleSearch from '../pages/searchList/simpleSearchPage';
import DetailInfo from '../pages/detailInfo';
import AccountSetting from '../pages/accountSetting';
import AccountCenter from '../pages/accountCenter';
import { KeepAliveItem } from '../components/keepAlive';

const config = [
  {
    title: 'Dashboard',
    icon: 'icon-shujudapan',
    children: [
      {
        path: '/dashboard/data',
        title: '数据大盘',
        component: <Dashboard />,
      },
      {
        path: '/dashboard/workspace',
        title: '工作台',
        component: <Dashboard />,
      },
    ],
  },
  {
    title: '列表详情',
    icon: 'icon-liebiao',
    children: [
      {
        path: '/list/simple_search',
        title: '简单查询',
        component: (
          <KeepAliveItem cacheId={'search'}>
            <SimpleSearch />
          </KeepAliveItem>
        ),
      },
      {
        path: '/list/detail/:id',
        title: '详情页',
        component: <DetailInfo />,
      },
    ],
  },
  {
    title: '配置中心',
    icon: 'icon-geren',
    children: [
      {
        path: '/account/center',
        title: '个人中心',
        component: <AccountCenter />,
      },
      {
        path: '/account/setting',
        title: '个人设置',
        component: <AccountSetting />,
      },
    ],
  },
  { path: '*', component: <NotFound /> },
];

export default config;
