import React, { memo } from 'react';
import { Space, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { ProTable } from '../../../components';

/**
 * 通用查询列表处理
 * - 对配置的列表数据进行处理，然后传递到表格组件中
 *
 */
const TableList = (props) => {
    const { request, columns, actions, operation } = props;
    const { loading, data, pageProps } = request;
    const { status } = useSelector(state => state.search);

    // 添加配置操作项
    // 处理页面级别的一些特殊的列表配置项
    const setColumns = () => {
        if (!columns) return [];
        if (!operation) return columns;
        const { editor, del, title, width, render } = operation;
        const column = {
            title: title || '操作',
            dataIndex: 'operationArea',
            width: width || 100,
            render: (value, record, index) => {
                if (render) return render(record, index);
                return <Space>
                    {editor && <a onClick={() => actions.handleEditor(record)}>编辑</a>}
                    {del && <Popconfirm title={'请确认是否删除该条数据？'} onConfirm={() => actions.handleDelete(record)}>
                        <a className={'danger'}>删除</a>
                    </Popconfirm>}
                </Space>;
            }
        };
        return [...columns, column];
    };

    return (
        <>
            <ProTable
                rowKey={'id'}
                loading={loading}
                dataSource={data?.data?.data || []}
                columns={setColumns()}
                {...pageProps ? { pagination: { ...pageProps } } : {}}
            />
        </>
    );
};

export default memo(TableList);
