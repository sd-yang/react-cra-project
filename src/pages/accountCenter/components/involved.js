import React, { useState } from 'react';
import { Card, Avatar, Tooltip, Badge } from 'antd';
import { ProTable } from '../../../components';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const Involved = () => {
    const [currentKey, setCurrentKey] = useState(1);

    return (
        <div>
            <Card title={'关联项目'}>
                <ProTable
                    size={'small'}
                    showHeader={false}
                    pagination={false}
                    columns={[
                        {
                            dataIndex: 'name',
                            className: 'cursor',
                            render: (value, record) => {
                                return <Badge count={record.task || 0} offset={[11, 7]} size={'small'}>{value}</Badge>;
                            }
                        }
                    ]}
                    dataSource={[
                        { name: '星图', key: 1, task: 6 },
                        { name: 'NET', key: 2 },
                        { name: '供应链管理', key: 3, task: 4 },
                        { name: '售后服务', key: 4 }
                    ]}
                    rowSelection={{
                        type: 'radio',
                        selectedRowKeys: [currentKey],
                        onChange: (keys) => setCurrentKey(keys[0])
                    }}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                setCurrentKey(record.key);
                            }
                        };
                    }}
                />
            </Card>

            <Card title={'成员'} style={{ marginTop: 16 }}>
                <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    <Avatar src="https://joeschmoe.io/api/v1/random"/>
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined/>}/>
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined/>}/>
                </Avatar.Group>
            </Card>
        </div>
    );
};

export default Involved;
