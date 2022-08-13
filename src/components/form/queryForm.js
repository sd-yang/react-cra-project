import React, { useCallback, memo } from 'react';
import { Col, Button, Space, Form, Card } from 'antd';
import useBoolean from '../hooks/useBoolean';
import ProForm from './proForm';
import Iconfont from '../iconfont';

const QueryForm = (props) => {
    const { defaultCollapsed, showCollapse = true, onFinish, filterEmpty = true } = props;
    const nodeLength = React.Children.count(props.children);

    const { state: collapse, toggle } = useBoolean(defaultCollapsed || false);
    const [form] = props.form ? [props.form] : Form.useForm();

    const handleSearch = useCallback((values) => {
        if (!onFinish) return;
        const data = {};
        // 过滤处理
        if (filterEmpty) {
            Object.keys(values).forEach(item => {
                if (values[item] !== undefined) data[item] = values[item];
            });
        }
        onFinish(data);
    }, []);

    const handleReset = useCallback(() => {
        form.resetFields();
        handleSearch({});
    }, []);

    return (
        <ProForm.FormGroup>
            {
                (showCollapse && nodeLength > 3) ?
                    props.children.filter((k, idx) => collapse ? true : idx < 3) :
                    props.children
            }
            <Col flex={'auto'} style={{ textAlign: 'right' }}>
                <Space>
                    {
                        showCollapse && props.children.length > 3 &&
                        <Button type={'link'} onClick={toggle}>
                            {!collapse ? '展开' : '收起'}
                            <Iconfont type={!collapse ? 'icon-arrowDown' : 'icon-arrowUp'}/>
                        </Button>
                    }
                    <Button onClick={handleReset}>重置</Button>
                    <Button type={'primary'} htmlType={'submit'}>查询</Button>
                </Space>
            </Col>
        </ProForm.FormGroup>
    );
};

export default memo(QueryForm);
