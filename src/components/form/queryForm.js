import React from "react";
import { Col, Button, Space, Form } from "antd";
import { colSpan } from "./index";
import { useBoolean } from '../hooks';
import ProForm from "./proForm";

const QueryForm = (props) => {
    const { defaultCollapsed } = props;
    const { state: collapse, toggle } = useBoolean( defaultCollapsed || true);
    const [form] = Form.useForm();

    return(
        <div>
            <ProForm form={form}>
                <ProForm.FormGroup>
                    {props.children}
                    <Col {...colSpan} style={{ textAlign: 'right' }}>
                        <Space>
                            <Button onClick={() => form.resetFields()}>重置</Button>
                            <Button type={'primary'}>查询</Button>
                            <Button type={'link'} onClick={toggle}>
                                {collapse ? '展开' : '收起'}
                            </Button>
                        </Space>
                    </Col>
                </ProForm.FormGroup>
            </ProForm>
        </div>
    )
};

export default QueryForm;
