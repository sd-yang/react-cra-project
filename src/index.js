import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import App from './routers';

import './styles/custom-default.css';
import './styles/custom-dark.css';
import './index.css';

// 开发环境使用 mock 数据模拟
process.env.NODE_ENV === 'development' && require('./mock');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
