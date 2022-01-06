import React, { useCallback } from "react";
import { Col, Button, Space, Form } from "antd";
import { useBoolean } from '../hooks';
import ProForm from "./proForm";
import Iconfont from "../iconfont";

const QueryForm = (props) => {
    const { defaultCollapsed, showCollapse = true, onFinish } = props;
    const nodeLength = React.Children.count(props.children);

    const { state: collapse, toggle } = useBoolean(defaultCollapsed || false);
    const [form] = Form.useForm();

    const handleSearch = useCallback((values) => {
        if (!onFinish) return;
        console.log(values)
    }, []);

    return (
        <div>
            <ProForm form={form} labelCol={{ flex: '100px' }} onFinish={handleSearch}>
                <ProForm.FormGroup>
                    {
                        (showCollapse && nodeLength > 3) ?
                            props.children.filter((k, idx) => collapse ? true : idx < 3) :
                            props.children
                    }
                    <Col flex={"auto"} style={{ textAlign: 'right' }}>
                        <Space>
                            <Button onClick={() => form.resetFields()}>重置</Button>
                            <Button type={'primary'} htmlType={'submit'}>查询</Button>
                            {
                                showCollapse && props.children.length > 3 &&
                                <Button type={'link'} onClick={toggle}>
                                    {!collapse ? '展开' : '收起'}
                                    <Iconfont type={!collapse ? 'icon-arrowDown' : 'icon-arrowUp'}/>
                                </Button>
                            }
                        </Space>
                    </Col>
                </ProForm.FormGroup>
            </ProForm>
        </div>
    )
};

export default QueryForm;
