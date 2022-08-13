import React from 'react';
import { QueryForm, FormInput, FormSelect, FormDatePicker, usePage, useBoolean, useToggle } from '../../../../components';

const SearchForm = (props) => {
    const { formList = [] } = props;

    return(
        <>
            <QueryForm>
                <FormInput label={'Id'} name={'id'}/>
                <FormInput label={'名称'} name={'title'}/>
                {/*<FormSelect label={'状态'} name={'status'}*/}
                {/*            option={{ requestData: getStatus, callback: statusCallBack }}/>*/}
                <FormInput label={'描述'} name={'desc'}/>
                <FormDatePicker label={'调度时间'} name={'time'}/>
            </QueryForm>
        </>
    )
};

export default SearchForm;

