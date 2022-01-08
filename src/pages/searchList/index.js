import React from "react";
import { Card, Radio, Space, Button } from "antd";
import { QueryForm, FormInput, FormSelect, FormDatePicker, ProTable } from '../../components';
import { getStatus } from "../../server/list";

const SearchList = () => {

    const toSearch = (values) => {
        console.log(values);
    };

    const switchType = (
        <Space>
            <Radio.Group defaultValue={'list'} buttonStyle="solid">
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
                <ProTable
                    rowKey={'id'}
                    dataSource={[]}
                    columns={[
                        { title: 'ID', dataIndex: 'id' },
                        { title: '名称', dataIndex: 'title' },
                        { title: '状态', dataIndex: 'status' },
                        { title: '描述', dataIndex: 'desc' },
                        { title: '上次调度时间', dataIndex: 'time' },
                        {
                            title: '操作',
                            dataIndex: 'operation',
                            width: 120,
                            render: () => {
                                return <Space>
                                    <a>删除</a>
                                    <a>编辑</a>
                                </Space>
                            }
                        }
                    ]}
                />
            </Card>
        </div>
    )
};

export default SearchList;
