import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Layout, Spin } from 'antd';
import Sidebar from './sidebar';
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

                {/* 需要添加 hasSider 属性，否则运行时才会检测是否有 Sider 组件，导致出现宽度计算问题 */}
                <Layout hasSider={true}>
                    <Sider theme={'light'} collapsible={true} breakpoint={'lg'} width={220}>
                        <Sidebar/>
                    </Sider>
                    <Content style={{ padding: '10px 16px 0', overflow: 'auto' }}>
                        <Outlet/>
                    </Content>
                </Layout>

            </Layout>
        </Spin>
    )
};

export default LayoutPage;
