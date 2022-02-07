import React from 'react';
import { Button, Dropdown, Menu, Card, Space, Descriptions } from 'antd';

const HeaderInfo = (props) => {
    const { data = {}, loading } = props.request;

    const menu = (
        <Menu style={{ width: 111 }}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
    );

    const headerExtra = [
        <Space key={'1'}>
            <Button>操作一</Button>
            <Button>操作二</Button>
            <Dropdown.Button overlay={menu} type={'primary'}>
                Actions
            </Dropdown.Button>
        </Space>
    ];

    return(
        <Card
            style={{ marginBottom: 20 }}
            title={`单号：${data.id || ''}`}
            extra={headerExtra}
            loading={loading}
        >
            <Descriptions size={'small'} title={'基本信息'} bordered>
                <Descriptions.Item label="联系人">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="责任方">淘宝</Descriptions.Item>
                <Descriptions.Item label="联系方式">1810000000</Descriptions.Item>
                <Descriptions.Item label="状态">进行中</Descriptions.Item>
                <Descriptions.Item label="创建时间">2022-01-01 12:12</Descriptions.Item>
                <Descriptions.Item label="截止时间">2022-01-10 12:12</Descriptions.Item>
                <Descriptions.Item label="描述">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
            </Descriptions>
        </Card>
    )
};

export default HeaderInfo;
