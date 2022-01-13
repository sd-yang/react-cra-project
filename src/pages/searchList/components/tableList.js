import React from "react";
import { Space, Popconfirm, message } from "antd";
import { ProTable } from "../../../components";
import { timeRender } from '../../../components/table/cellRender';

const TableList = (props) => {
    const { request } = props;
    const { loading, data } = request;

    console.log(data)

    const handleDelete = () => {
        message.success('删除成功！');
    };

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
                    { title: '上次调度时间', dataIndex: 'time', render: timeRender },
                    {
                        title: '操作',
                        dataIndex: 'operation',
                        width: 120,
                        render: () => {
                            return <Space>
                                <Popconfirm title={'请确认是否删除该条数据？'} onConfirm={handleDelete}>
                                    <a className={'danger'}>删除</a>
                                </Popconfirm>
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
