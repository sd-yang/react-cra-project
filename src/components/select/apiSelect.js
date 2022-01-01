import React, { useEffect, memo, useMemo } from "react";
import { Select, Form } from "antd";
import { useRequest } from '../../utils/request';

const { Option } = Select;

// TODO
const ApiSelect = (props) => {
    const { formProps, disabled, dataSource, requestData, formatResult, refreshFlag, ...otherProps } = props;
    const manual = Boolean(dataSource);

    const { loading, data } = useRequest(requestData, { manual });

    useEffect(() => {

    }, []);

    const formatData = useMemo(() => {
        if (manual) return dataSource;
        if (formatResult) return formatResult(data);
        return data?.data?.data || [];
    }, [data]);

    const selectNode = (
        <Select
            allowClear={true}
            style={{ width: '100%' }}
            disabled={disabled || false}
            loading={loading}
            {...otherProps}
        >
            {
                formatData().map((item, idx) => {
                    return <Option key={idx} value={item.value} disabled={item.disabled || false}>
                        {item.label}
                    </Option>
                })
            }
        </Select>
    );

    if (!formProps) return {selectNode};
    return (
        <Form.Item {...formProps}>
            {selectNode}
        </Form.Item>
    )
};

export default memo(ApiSelect);
