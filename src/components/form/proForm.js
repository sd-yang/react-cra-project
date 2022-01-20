import React from "react";
import { Form } from "antd";
import FormGroup from "./formGroup";

const ProForm = (props) => {
    const { ...formProps } = props;
    const [form] = Form.useForm();

    return (
        <Form form={props.form || form} {...formProps}>
            {props.children}
        </Form>
    )
};

ProForm.FormGroup = FormGroup;
export default ProForm;
