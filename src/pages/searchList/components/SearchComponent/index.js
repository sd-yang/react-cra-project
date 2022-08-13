import React from 'react';
import { Form } from 'antd';
import { ProForm } from '../../../../components';
import FunctionArea from './functionArea';
import SearchForm from './searchForm';

/**
 * 列表查询
 * - 支持自定义渲染 render
 *
 */
const SearchComponent = (props) => {
    const { render, actions, operation } = props;
    const { search } = operation;
    const [searchForm] = Form.useForm();

    return (
        <ProForm form={searchForm}>
            {
                render ? render(searchForm, actions.handleSearch) :
                    <>
                        <SearchForm form={searchForm} {...props}/>
                        <FunctionArea form={searchForm} {...props}/>
                    </>
            }
        </ProForm>
    );
};

export default SearchComponent;
