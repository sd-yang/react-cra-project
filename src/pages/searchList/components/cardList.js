import React, { memo, useMemo } from 'react';
import { List, Card, Popconfirm } from 'antd';
import { timeRender, statusRender, idToDetail } from '../../../components/table/cellRender';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const cardStyle = {
    style: { minWidth: 300, margin: 'auto' },
    bodyStyle: { height: 250 },
    hoverable: true,
    size: 'small'
};

const CardList = (props) => {
    const { request, operation } = props;
    const { loading, data, pageProps } = request;
    const { status } = useSelector(state => state.search);
    const dataSource = useMemo(() => data?.data?.data, [data]);

    const actions = (item) => [
        <a key="edit" onClick={() => operation.handleEditor(item)}><EditOutlined/> 编辑</a>,
        <Popconfirm title={'请确认是否删除该条数据？'} onConfirm={() => operation.handleDelete(item)}>
            <a key="ellipsis"><DeleteOutlined /> 删除</a>
        </Popconfirm>
    ];

    const title = (item) => (
        <>
            <div className={'card-id-title'}>
                {idToDetail(item.id, '/list/detail')}
                <span><UserOutlined/> {item.operator}</span>
            </div>
            <div>
                {timeRender(item.time)}
                <span>{statusRender(item.status, status)}</span>
            </div>
        </>
    );

    // TODO 自动排序填充
    return (
        <List
            loading={loading}
            grid={{ gutter: 16, xs: 1, lg: 2, xl: 2, xxl: 4 }}
            dataSource={dataSource}
            renderItem={item => (
                <List.Item>
                    <Card title={title(item)} actions={actions(item)} {...cardStyle}>
                        <div className={'card-content-title'}>{item.title}</div>
                        <div className={'card-content'}>{item.desc}</div>
                    </Card>
                </List.Item>
            )}
            {...pageProps ? { pagination: pageProps } : {}}
        />
    );
};

export default memo(CardList);
