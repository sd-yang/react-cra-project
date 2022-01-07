import React from "react";
import { Form, Input, DatePicker } from "antd";
import ApiSelect from "./apiSelect";

const FormControl = (props) => {
    const { name, label, rules, ...otherProps } = props;
    return (
        <Form.Item label={label} name={name} rules={rules} {...otherProps}>
            {props.children}
        </Form.Item>
    )
};

export const FormInput = (props) => {
    return <FormControl {...props}>
        <Input/>
    </FormControl>
};

export const FormSelect = (props) => {
    const { option = {} } = props;
    return <FormControl {...props}>
        <ApiSelect {...option}/>
    </FormControl>
};

export const FormDatePicker = (props) => {
    return <FormControl {...props}>
        <DatePicker
            style={{ width: '100%' }}
            format={props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'}
        />
    </FormControl>
}
