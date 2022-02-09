import React from 'react';
import { Card, Avatar, Tooltip } from 'antd';
import { ProTable } from '../../../components';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const Involved = () => {

    return(
        <div>
            <Card title={'关联项目'}>
                <ProTable
                    size={'small'}
                    showHeader={false}
                    pagination={false}
                    columns={[{ dataIndex: 'name' }]}
                    dataSource={[
                        { name: '星图', key: 1 },
                        { name: 'NET', key: 2 },
                        { name: '供应链管理', key: 3 },
                        { name: '售后服务', key: 4 }
                    ]}
                />
            </Card>

            <Card title={'成员'} style={{ marginTop: 16 }}>
                <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
            </Card>
        </div>
    )
};

export default Involved;
