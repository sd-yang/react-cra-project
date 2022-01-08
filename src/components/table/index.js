import React from "react";
import { Table } from "antd";
import { useRequest } from '../../utils/request';

const ProTable = (props) => {
    const { dataSource, bordered = true, size = 'middle', ...tableProps } = props;
    const manual = Boolean(dataSource);
    const { loading, data = [] } = useRequest('', { manual });

    return(
        <div>
            <Table
                size={size}
                bordered={bordered}
                columns={[]}
                dataSource={dataSource || data}
                loading={loading}
                {...tableProps}
            />
        </div>
    )
};

export default ProTable;
