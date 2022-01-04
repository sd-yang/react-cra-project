import React from "react";
import { Table } from "antd";
import { useRequest } from '../../utils/request';

const ProTable = (props) => {
    const { ...tableProps } = props;
    const { loading, data = [] } = useRequest('', { manual: true });

    return(
        <div>
            <Table
                columns={[]}
                dataSource={data}
                loading={loading}
                {...tableProps}
            />
        </div>
    )
};

export default ProTable;
