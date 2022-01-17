import React, { memo } from 'react';
import { Card } from 'antd';
import { ProTable } from '../../../components';

const OperationRecord = () => {
    return(
        <Card title={'操作记录'} style={{ marginTop: 20 }}>
            <ProTable
                columns={[
                    { title: '操作类型', dataIndex: 'type' },
                    { title: '操作人', dataIndex: 'operator' },
                    { title: '执行结果', dataIndex: 'results' },
                    { title: '操作时间', dataIndex: 'time' },
                    { title: '备注', dataIndex: 'remark' },
                ]}
                dataSource={[]}
            />
        </Card>
    )
};

export default memo(OperationRecord);
