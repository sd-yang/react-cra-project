import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Header, Content, Sider } = Layout;

const LayoutPage = (props) => {
    return (
        <Layout>
            <Header>Header</Header>

            <Layout>
                <Sider>Sider</Sider>
                <Content>
                    <Button>235</Button>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
};

export default LayoutPage;
