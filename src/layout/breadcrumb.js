import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbNode = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(k => k);
    const extraList = paths.map((item, idx) => {
        const url = `/${paths.slice(0, idx + 1).join('/')}`;
        // TODO 获取router数据转化菜单
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{url}</Link>
            </Breadcrumb.Item>
        )
    });

    return (
        <Breadcrumb>
            <Breadcrumb.Item key="home">
                <Link to="/">Home</Link>
            </Breadcrumb.Item>
            {extraList}
        </Breadcrumb>
    )
};

export default BreadcrumbNode;
