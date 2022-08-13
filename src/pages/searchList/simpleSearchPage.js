import React from 'react';
import SearchPageList from './index';
import { idToDetail } from '../../components/table/cellRender';
import { getList, getStatus } from '../../server/list';
import { usePage } from '../../components';

/**
 * 简单查询弹窗页面
 *
 */

const SimpleSearchPage = () => {
    return(
        <SearchPageList
            title={'简单查询页面'}
            subTitle={'支持弹窗修改'}
            query={usePage(getList)}
            formatData={() => {}}
            search={{

            }}
            columns={[
                { title: 'ID', dataIndex: 'id', render: (v) => idToDetail(v, '/list/detail'), width: 200 },
                { title: '名称', dataIndex: 'title', ellipsis: true },
                { title: '状态', dataIndex: 'status', width: 80 },
                { title: '描述', dataIndex: 'desc', ellipsis: true },
                { title: '责任人', dataIndex: 'operator', width: 80 },
                { title: '上次调度时间', dataIndex: 'time', date: true, width: 200 },
            ]}
            operation={{
                add: {
                    request: ''
                },
                del: true,
                editor: true,
                search: {
                    filters: {
                        defaultValue: 'key',
                        dataSource: [{ label: '名称', value: 'key' }],
                    },
                    formList: [],
                },
                mode: 'modal',

            }}
        />
    )
};

export default SimpleSearchPage;