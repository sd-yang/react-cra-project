import React from "react";
import { Space } from "antd";
import { ProTable } from "../../../components";

const TableList = (props) => {
    const { request } = props;
    const { loading, data } = request;

    console.log(data)

    return(
        <>
            <ProTable
                rowKey={'id'}
                loading={loading}
                dataSource={data?.data?.data || []}
                columns={[
                    { title: 'ID', dataIndex: 'id' },
                    { title: '名称', dataIndex: 'title' },
                    { title: '状态', dataIndex: 'status' },
                    { title: '描述', dataIndex: 'desc' },
                    { title: '操作人', dataIndex: 'operator' },
                    { title: '上次调度时间', dataIndex: 'time' },
                    {
                        title: '操作',
                        dataIndex: 'operation',
                        width: 120,
                        render: () => {
                            return <Space>
                                <a className={'danger'}>删除</a>
                                <a>编辑</a>
                            </Space>
                        }
                    }
                ]}
            />
        </>
    )
};

export default TableList;
