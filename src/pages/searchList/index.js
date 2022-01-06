import React from "react";
import { QueryForm, FormInput } from '../../components/form'

const SearchList = () => {

    return(
        <div>
            <QueryForm>
                <FormInput label={'测试1234'} name={'test1'}/>
                <FormInput label={'测试1'} name={'test2'}/>
                <FormInput label={'测试1'} name={'test3'}/>
                <FormInput label={'测试1'} name={'test4'}/>
            </QueryForm>
        </div>
    )
};

export default SearchList;
