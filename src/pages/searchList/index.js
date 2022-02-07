import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorRow, setStatus, setType } from '../../store/search';
import { Card, Radio, Space, Button, message } from 'antd';
import { QueryForm, FormInput, FormSelect, FormDatePicker, usePage, useBoolean } from '../../components';
import { getStatus, getList } from '../../server/list';

import TableList from './components/tableList';
import CardList from './components/cardList';
import EditorDrawer from './components/editorDrawer';
import './index.less';

const SearchList = () => {
    const toggleEditor = useBoolean(false);
    const { type } = useSelector(state => state.search);
    const [pageSize, setPageSize] = useState(10);
    const dispatch = useDispatch();
    const queryReq = usePage(getList, { pageSize });

    // 切换展示形态
    const handleType = (e) => {
        const take = e.target.value === 'list' ? 10 : 8;
        setPageSize(take);
        dispatch(setType(e.target.value));
        queryReq.refreshPage(take);
    };

    // 操作 新增｜编辑｜删除
    const operation = {
        handleEditor: (record = {}) => {
            dispatch(setEditorRow(record));
            toggleEditor.setTrue();
        },
        handleDelete: () => {
            message.success('删除成功！');
            queryReq.refreshPage();
        }
    }

    const toSearch = useCallback((values) => {
        queryReq.resetRun(values);
    }, [queryReq]);

    const statusCallBack = useCallback((data) => {
        const list = data?.data || [];
        const statusList = {};
        list.forEach(item => {
            statusList[item.value] = item.label;
        });
        dispatch(setStatus(statusList));
    }, []);

    const handleRefresh = useCallback(() => {
        queryReq.refresh();
    }, [queryReq]);

    const switchType = (
        <Space>
            <Button onClick={() => operation.handleEditor()}>新增</Button>
            <Radio.Group value={type} buttonStyle="solid" onChange={handleType}>
                <Radio.Button value={'list'}>列表式</Radio.Button>
                <Radio.Button value={'card'}>卡片式</Radio.Button>
            </Radio.Group>
            <Button onClick={handleRefresh}>刷新</Button>
        </Space>
    );

    return (
        <div className={'searchListWrap'}>
            <QueryForm onFinish={toSearch}>
                <FormInput label={'Id'} name={'id'}/>
                <FormInput label={'名称'} name={'title'}/>
                <FormSelect label={'状态'} name={'status'} option={{ requestData: getStatus, callback: statusCallBack }}/>
                <FormInput label={'描述'} name={'desc'}/>
                <FormDatePicker label={'调度时间'} name={'time'}/>
            </QueryForm>

            <Card extra={switchType}>
                {
                    type === 'list' ?
                        <TableList
                            request={queryReq}
                            operation={operation}
                        /> :
                        <CardList
                            request={queryReq}
                            operation={operation}
                        />
                }
            </Card>

            <EditorDrawer control={toggleEditor} refresh={handleRefresh}/>
        </div>
    );
};

export default memo(SearchList);
