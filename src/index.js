import React from 'react';
import ReactDOM from 'react-dom';

import App from './routers';
import './index.css';
import 'antd/dist/antd.min.css';

// 开发环境使用 mock 数据模拟
process.env.NODE_ENV === 'development' && require('./mock');

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
