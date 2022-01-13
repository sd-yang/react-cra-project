import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd';
import store from './store';
import App from './routers';
import 'antd/dist/antd.min.css';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.css';

// 开发环境使用 mock 数据模拟
process.env.NODE_ENV === 'development' && require('./mock');

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);
