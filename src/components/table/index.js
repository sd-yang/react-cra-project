import React, { useState, useEffect } from 'react';
import { Table, Button, Space } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { useRequest } from '../../utils/request';
import './index.less';
import TableSetting from './tableSetting';
import { ellipsisRender, timeRender } from './cellRender';

const ProTable = (props) => {
    const {
        dataSource,
        bordered = true,
        size = 'middle',
        columns,
        hideSetting,
        requestData,
        afterSetColumn,
        ...tableProps
    } = props;
    const [tbColumns, setColumns] = useState(columns || []);
    const [originalColumn, setOriginalColumn] = useState(columns || []);
    const manual = Boolean(dataSource);
    const { loading, data = [], refresh } = useRequest(requestData, { manual });

    useEffect(() => {
        setColumns(columns);
        setOriginalColumn(columns);
    }, [columns]);

    // 刷新列表（按照缓存的查询条件）
    const handleRefreshList = () => {
        if (refresh) refresh();
    };

    // 处理列(优化列表展示)
    const dealWithColumns = (data) => {
        if (!data) return [];
        return data.map(item => {
            const obj = {
                align: item.align || 'center',
                ...(item.ellipsis && !item.render) ? { render: ellipsisRender } : {},
                ...(item.date && !item.render) ? { render: timeRender } : {}
            };
            return { ...item, ...obj };
        });
    };

    return (
        <div className={'table-wrap'}>
            <Space style={{ float: 'right', marginTop: -40 }}>
                {
                    <Button onClick={handleRefreshList} disabled={loading}>
                        <SyncOutlined/>
                    </Button>
                }
                {
                    !hideSetting &&
                    <TableSetting
                        list={tbColumns}
                        setList={setColumns}
                        origin={originalColumn}
                        setOrigin={setOriginalColumn}
                        afterSetColumn={afterSetColumn}
                    />
                }
            </Space>

            <Table
                size={size}
                bordered={bordered}
                columns={dealWithColumns(tbColumns)}
                dataSource={dataSource || data}
                loading={loading}
                {...tableProps}
            />
        </div>
    );
};

export default ProTable;
