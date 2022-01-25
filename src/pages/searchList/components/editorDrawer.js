import React, { memo, useEffect } from 'react';
import { Form } from 'antd';
import { useSelector } from 'react-redux';
import { DrawerForm, ProForm, FormInput, FormInputArea, FormSelect } from '../../../components';
import { getStatus } from '../../../server/list';

const { FormGroup } = ProForm;

const EditorDrawer = (props) => {
    const { control, refresh } = props;
    const [form] = Form.useForm();
    const { editorRow } = useSelector(state => state.search);
    const isEditor = Object.keys(editorRow).length > 0;

    useEffect(() => {
        if (!control.state) return;
        form.resetFields();
        form.setFieldsValue(editorRow);
    }, [control.state]);

    const handleFinish = async () => {
        await form.validateFields();
        refresh();
        return true;
    };

    return (
        <DrawerForm
            title={isEditor ? '编辑' : '新增'}
            control={control}
            onFinish={handleFinish}
        >
            <ProForm form={form} labelCol={{ flex: '75px' }}>
                <FormInput label={'名称'} name={'title'}/>
                <FormGroup span={12}>
                    <FormSelect label={'状态'} name={'status'} option={{ requestData: getStatus }}/>
                    <FormInput label={'责任人'} name={'operator'}/>
                </FormGroup>
                <FormInputArea label={'描述'} name={'desc'}/>
            </ProForm>
        </DrawerForm>
    );
};

export default memo(EditorDrawer);
