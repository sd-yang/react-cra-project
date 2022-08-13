import React, { memo, useCallback } from 'react';
import { Select } from 'antd';
import { useRequest } from '../../utils/request';

const { Option } = Select;

// TODO 模糊搜索
const ApiSelect = (props) => {
    const { formProps, disabled, dataSource, request, formatResult, refreshFlag, callback, ...otherProps } = props;
    const manual = Boolean(dataSource);

    const { loading, data } = useRequest(request, {
        manual,
        onSuccess: (value) => {
            if (callback) callback(value);
        }
    });

    const formatData = useCallback(() => {
        if (manual) return dataSource;
        if (formatResult) return formatResult(data);
        return data?.data || [];
    }, [data]);

    return (
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
                    </Option>;
                })
            }
        </Select>
    );
};

export default memo(ApiSelect);
