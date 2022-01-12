import React, { useCallback, useState } from 'react';
import { Card, Radio, Space, Button } from 'antd';
import { QueryForm, FormInput, FormSelect, FormDatePicker, useToggle } from '../../components';
import { getStatus, getList } from '../../server/list';
import { useRequest } from '../../utils/request';

import TableList from './components/tableList';
import CardList from './components/cardList';
import './index.less';

const SearchList = () => {
    const { state: type, toggle } = useToggle('list', 'card');
    const [search, setSearch] = useState({});
    const queryReq = useRequest(getList);

    const toSearch = useCallback((values) => {
        setSearch(values);
        queryReq.run(values);
    }, []);

    const handleType = useCallback(() => {
        toggle();
        toSearch({});
    }, [type]);

    const switchType = (
        <Space>
            <Radio.Group value={type} buttonStyle="solid" onChange={handleType}>
                <Radio.Button value={'list'}>列表式</Radio.Button>
                <Radio.Button value={'card'}>卡片式</Radio.Button>
            </Radio.Group>
            <Button onClick={() => queryReq.run(search)}>刷新</Button>
        </Space>
    );

    console.log(type);

    return (
        <div className={'searchListWrap'}>
            <QueryForm onFinish={toSearch}>
                <FormInput label={'Id'} name={'id'}/>
                <FormInput label={'名称'} name={'title'}/>
                <FormSelect label={'状态'} name={'status'} option={{ requestData: getStatus }}/>
                <FormInput label={'描述'} name={'desc'}/>
                <FormDatePicker label={'调度时间'} name={'time'}/>
            </QueryForm>

            <Card extra={switchType}>
                {
                    type === 'list' ?
                        <TableList
                            request={queryReq}
                            search={search}
                        /> :
                        <CardList
                            request={queryReq}
                        />
                }
            </Card>
        </div>
    );
};

export default SearchList;
