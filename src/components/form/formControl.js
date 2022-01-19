import React from 'react';
import { Form, Input, DatePicker, Checkbox } from 'antd';
import ApiSelect from './apiSelect';

const FormControl = (props) => {
    const { name, label, rules, ...otherProps } = props;
    return (
        <Form.Item label={label} name={name} rules={rules} {...otherProps}>
            {props.children}
        </Form.Item>
    );
};

export const FormInput = (props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <Input {...option}/>
    </FormControl>;
};

export const FormPassword = (props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <Input.Password {...option}/>
    </FormControl>;
};

export const FormSelect = (props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <ApiSelect {...option}/>
    </FormControl>;
};

export const FormDatePicker = (props) => {
    return <FormControl {...props}>
        <DatePicker
            style={{ width: '100%' }}
            format={props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'}
        />
    </FormControl>;
};

export const FormCheckbox = (props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <Checkbox.Group {...option}/>
    </FormControl>;
};
