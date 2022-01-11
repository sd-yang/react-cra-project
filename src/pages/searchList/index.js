import React from "react";
import { Card, Radio, Space, Button } from "antd";
import { QueryForm, FormInput, FormSelect, FormDatePicker, useToggle } from '../../components';
import { getStatus, getList } from "../../server/list";
import { useRequest } from '../../utils/request';

import TableList from "./components/tableList";

const SearchList = () => {
    const { state: type, toggle } = useToggle('list', 'card');
    const queryReq = useRequest(getList);

    const toSearch = (values) => {
        console.log(values);
    };

    const handleType = () => {
        toggle();
    };

    const switchType = (
        <Space>
            <Radio.Group value={type} buttonStyle="solid" onChange={handleType}>
                <Radio.Button value={'list'}>列表式</Radio.Button>
                <Radio.Button value={'card'}>卡片式</Radio.Button>
            </Radio.Group>
            <Button>刷新</Button>
        </Space>
    );

    return (
        <div>
            <QueryForm onFinish={toSearch}>
                <FormInput label={'Id'} name={'id'}/>
                <FormInput label={'名称'} name={'title'}/>
                <FormSelect label={'状态'} name={'status'} option={{ requestData: getStatus }}/>
                <FormInput label={'描述'} name={'desc'}/>
                <FormDatePicker label={'调度时间'} name={'time'}/>
            </QueryForm>

            <Card extra={switchType}>
                <TableList
                    request={queryReq}
                />
            </Card>
        </div>
    )
};

export default SearchList;
