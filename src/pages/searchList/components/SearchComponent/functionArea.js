import React from 'react';
import { Input, Button, Space, Row } from 'antd';
import { FormSelect, FormInput } from '../../../../components';

const FunctionArea = (props) => {
    const { showAdd, extra, filters, search, actions, form } = props;

    return (
        <Row style={{ margin: '10px 0' }}>
            <Space>
                {showAdd !== false && <Button onClick={actions.handleCreate}>新增</Button>}
                {extra && extra(form)}
                {filters && <Input.Group compact>
                    <FormSelect
                        formProps={{ style: { margin: 0 }, name: 'filterValue', ...filters?.formProps || {} }}
                        style={{ minWidth: 120 }}
                        {...filters}
                    />
                    <FormInput
                        formProps={{ style: { margin: 0 }, name: 'searchValue', ...search?.formProps || {} }}
                        type={'search'}
                        style={{ minWidth: 300 }}
                        onSearch={() => actions.handleSearch(form)}
                        {...search}
                    />
                </Input.Group>}
            </Space>
        </Row>
    );
};

export default FunctionArea;
