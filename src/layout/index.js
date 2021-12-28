import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Layout, Spin } from 'antd';
import Sidebar from './sidebar';
import Breadcrumb from './breadcrumb';
import HeaderNode from "./header";
import './index.less';

const { Header, Content, Sider } = Layout;

const LayoutPage = (props) => {
    const { loading } = useSelector(state => state.main);
    // TODO 配置风格等数据
    return (
        <Spin spinning={loading} delay={500}>
            <Layout className={'layoutWrap'}>
                <Header>
                    <HeaderNode/>
                </Header>

                <Layout>
                    <Sider theme={'light'} collapsible={true} breakpoint={'lg'} width={220}>
                        <Sidebar/>
                    </Sider>
                    <Content style={{ margin: '10px 16px 0' }}>
                        <Breadcrumb/>
                        <Outlet/>
                    </Content>
                </Layout>

            </Layout>
        </Spin>
    )
};

export default LayoutPage;
