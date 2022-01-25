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
    const { option = {} } = props;
    return <FormControl {...props}>
        <Input {...option}/>
    </FormControl>;
});

export const FormInputArea = memo((props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <TextArea autoSize={{ minRows: 5 }} {...option}/>
    </FormControl>;
});

export const FormPassword = (props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <Input.Password {...option}/>
    </FormControl>;
};

export const FormSelect = memo((props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <ApiSelect {...option}/>
    </FormControl>;
});

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
