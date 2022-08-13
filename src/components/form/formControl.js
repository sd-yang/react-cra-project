import React, { memo } from 'react';
import { Form, Input, DatePicker, Checkbox } from 'antd';
import ApiSelect from './apiSelect';

const { TextArea } = Input;

const FormControl = (props) => {
    const { name, label, rules, ...otherProps } = props;
    return (
        <Form.Item label={label} name={name} rules={rules} {...otherProps}>
            {props.children}
        </Form.Item>
    );
};

export const FormInput = memo((props) => {
    const { type, formProps, ...rest } = props;
    let children;
    switch (type) {
        case 'search':
            children = <Input.Search {...rest}/>;
            break;
        case 'area':
            children = <TextArea autoSize={{ minRows: 5 }} {...rest}/>;
            break;
        case 'password':
            children = <Input.Password {...rest}/>;
            break;
        default:
            children = <Input {...rest}/>;
    }
    return <FormControl {...formProps}>
        {children}
    </FormControl>;
});

export const FormSelect = memo((props) => {
    const { formProps, ...rest } = props;
    return <FormControl {...formProps}>
        <ApiSelect {...rest}/>
    </FormControl>;
});

export const FormDatePicker = (props) => {
    const { formProps, ...rest } = props;
    return <FormControl {...formProps}>
        <DatePicker
            style={{ width: '100%' }}
            format={props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'}
            {...rest}
        />
    </FormControl>;
};

export const FormCheckbox = (props) => {
    const { formProps, ...rest } = props;
    return <FormControl {...formProps}>
        <Checkbox.Group {...rest}/>
    </FormControl>;
};
