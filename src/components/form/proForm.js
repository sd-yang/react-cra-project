import React from "react";
import { Form } from "antd";
import FormGroup from "./formGroup";

const ProForm = (props) => {
    const { ...formProps } = props;
    const [form] = Form.useForm();

    return (
        <Form {...formProps} form={props.form || form}>
            {props.children}
        </Form>
    )
};

ProForm.FormGroup = FormGroup;
export default ProForm;
