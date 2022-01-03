import React from "react";
import { Form } from "antd";
import FormGroup from "./formGroup";

const ProForm = (props) => {

    return(
        <Form>
            {props.children}
        </Form>
    )
};

export { FormGroup }

export default ProForm;
