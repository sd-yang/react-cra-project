import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { usePage, useBoolean, useToggle } from '../../../components';
import { getStatus, getList } from '../../../server/list';

import TableList from './tableList';
import EditorDrawer from './editorDrawer';
import SearchComponent from './SearchComponent';
import '../index.less';

const searchContent = (props) => {
    const { query, formatData, columns, operation } = props;
    const toggleEditor = useBoolean(false);
    const dialogType = useToggle('create', 'editor');
    const { type } = useSelector(state => state.search);
    const [pageSize, setPageSize] = useState(10);
    const [searchParams, setSearchParams] = useState({});
    const [editorRecord, setEditorRecord] = useState({});

    // 操作 新增｜删除｜编辑｜查询
    const actions = {
        handleCreate: () => {
            setEditorRecord({});
            dialogType.set('create');
            toggleEditor.setTrue();
        },
        handleDelete: () => {
            message.success('删除成功！');
            actions.handleRefresh();
        },
        handleEditor: (record = {}) => {
            setEditorRecord(record);
            dialogType.set('editor');
            toggleEditor.setTrue();
        },
        handleSearch: (field) => {
            let values = field.getFieldsValue();
            let runParams = { ...values };
            if (formatData) runParams = formatData(runParams);
            query.run(runParams);
        },
        handleRefresh: () => {
            query.run(searchParams);
        }
    };

    return (
        <div className={'searchPageWrap'}>
            {
                operation?.search?.render ?
                    operation.search.render(actions) :
                    <SearchComponent
                        actions={actions}
                        operation={operation}
                        {...props}
                    />
            }

            <TableList
                request={query}
                actions={actions}
                columns={columns}
            />

            <EditorDrawer
                type={dialogType}
                control={toggleEditor}
                refresh={actions.handleRefresh}
            />
        </div>
    );
};

export default memo(searchContent);
