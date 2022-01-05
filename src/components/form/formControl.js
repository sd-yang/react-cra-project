import React from "react";
import { Form, Input } from "antd";

const FormControl = (props) => {
    const { name, label, rules, ...otherProps } = props;
    return(
        <Form.Item label={label} name={name} rules={rules} {...otherProps}>
            {props.children}
        </Form.Item>
    )
};

const FormInput = (props) => {
    return <FormControl {...props}>
        <Input/>
    </FormControl>
};

export { FormInput };