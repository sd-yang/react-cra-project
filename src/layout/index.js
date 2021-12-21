import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Button } from 'antd';
import Sidebar from './sidebar';
import Breadcrumb from './breadcrumb';

const { Header, Content, Sider } = Layout;

const LayoutPage = (props) => {
    // TODO 配置风格等数据
    return (
        <Layout>
            <Header style={{ height: 45 }}>Header</Header>

            <Layout>
                <Sider theme={'light'} collapsible={true} breakpoint={'lg'} width={220}>
                    <Sidebar />
                </Sider>
                <Content style={{ margin: '10px 16px 0' }}>
                    <Breadcrumb />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
};

export default LayoutPage;
