import React, { memo } from 'react';
import { Drawer, Space, Button } from 'antd';

const DrawerForm = (props) => {
    const { title, control, okLoading, onFinish, ...restProps } = props;
    const { state, setFalse } = control;

    const handleOk = async () => {
        let results = false;
        if (onFinish) results = await onFinish();
        if (!results) return;
        setFalse();
    };

    return (
        <Drawer
            title={title}
            visible={state}
            width={736}
            onClose={setFalse}
            footer={
                <Space align={'end'}>
                    <Button onClick={setFalse}>取消</Button>
                    <Button type={'primary'} loading={okLoading} onClick={handleOk}>
                        确定
                    </Button>
                </Space>
            }
            footerStyle={{ textAlign: 'end' }}
            {...restProps}
        >

        </Drawer>
    );
};

export default memo(DrawerForm);
