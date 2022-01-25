import React, { memo } from 'react';
import { Space, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { ProTable } from '../../../components';
import { timeRender, idToDetail, ellipsisRender, statusRender } from '../../../components/table/cellRender';

const TableList = (props) => {
    const align = 'center';
    const { request, operation } = props;
    const { loading, data, pageProps } = request;
    const { status } = useSelector(state => state.search);

    return (
        <>
            <ProTable
                rowKey={'id'}
                loading={loading}
                dataSource={data?.data?.data || []}
                columns={[
                    { title: 'ID', dataIndex: 'id', render: (v) => idToDetail(v, '/list/detail'), width: 200, align },
                    { title: '名称', dataIndex: 'title', render: ellipsisRender, ellipsis: { showTitle: false }, align },
                    { title: '状态', dataIndex: 'status', width: 80, render: v => statusRender(v, status), align },
                    { title: '描述', dataIndex: 'desc', ellipsis: { showTitle: false }, render: ellipsisRender, align },
                    { title: '责任人', dataIndex: 'operator', width: 80, align },
                    { title: '上次调度时间', dataIndex: 'time', render: timeRender, width: 200, align },
                    {
                        title: '操作',
                        dataIndex: 'operation',
                        width: 100,
                        render: (value, record) => {
                            return <Space>
                                <Popconfirm title={'请确认是否删除该条数据？'} onConfirm={operation.handleDelete}>
                                    <a className={'danger'}>删除</a>
                                </Popconfirm>
                                <a onClick={() => operation.handleEditor(record)}>编辑</a>
                            </Space>;
                        },
                        align
                    }
                ]}
                {...pageProps ? { pagination: pageProps } : {}}
            />
        </>
    );
};

export default memo(TableList);
