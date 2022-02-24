import React from "react";
import { Table, Button } from "antd";
import { useRequest } from '../../utils/request';

const ProTable = (props) => {
    const { dataSource, bordered = true, size = 'middle', columns, ...tableProps } = props;
    const manual = Boolean(dataSource);
    const { loading, data = [] } = useRequest('', { manual });

    return(
        <div>
            <Table
                size={size}
                bordered={bordered}
                columns={columns || []}
                dataSource={dataSource || data}
                loading={loading}
                {...tableProps}
            />
        </div>
    )
};

export default ProTable;
