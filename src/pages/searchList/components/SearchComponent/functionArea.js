import React from 'react';
import { Input, Button, Space, Row } from 'antd';
import { FormSelect, FormInput } from '../../../../components';

/**
 * 简洁查询
 *
 */

const SimpleSearch = (props) => {
    const { showAdd, extra, filters, search, actions, toSearch } = props;

    return (
        <Row style={{ margin: '10px 0' }}>
            <Space>
                {showAdd !== false && <Button onClick={actions.handleCreate}>新增</Button>}
                {extra}
                <Input.Group compact>
                    {
                        filters !== false &&
                        <FormSelect
                            formProps={{ style: { margin: 0 }, name: 'filterValue', ...filters?.formProps }}
                            style={{ minWidth: 120 }}
                            {...filters}
                        />
                    }
                    <FormInput
                        formProps={{ style: { margin: 0 }, name: 'searchValue', ...search?.formProps }}
                        type={'search'}
                        style={{ minWidth: 300 }}
                        onSearch={toSearch}
                        {...search}
                    />
                </Input.Group>
            </Space>
        </Row>
    );
};

export default SimpleSearch;
