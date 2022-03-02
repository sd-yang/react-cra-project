import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useRequest } from '../../utils/request';
import TableSetting from './tableSetting';
import './index.less';

const ProTable = (props) => {
    const { dataSource, bordered = true, size = 'middle', columns, hideSetting, requestData, ...tableProps } = props;
    const [tbColumns, setColumns] = useState(columns || []);
    const [originalColumn, setOriginalColumn] = useState(columns || []);
    const manual = Boolean(dataSource);
    const { loading, data = [] } = useRequest(requestData, { manual });

    useEffect(() => {
        setColumns(columns);
        setOriginalColumn(columns);
    }, [columns]);

    return (
        <div className={'table-wrap'}>
            <Table
                size={size}
                bordered={bordered}
                columns={tbColumns}
                dataSource={dataSource || data}
                loading={loading}
                {...tableProps}
            />

            {
                !hideSetting &&
                <TableSetting
                    list={tbColumns}
                    setList={setColumns}
                    origin={originalColumn}
                    setOrigin={setOriginalColumn}
                />
            }
        </div>
    );
};

export default ProTable;
