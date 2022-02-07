import React from 'react';
import { Button, Avatar, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ProForm, FormInput, FormInputArea } from '../../../components';

const BaseSetting = () => {

    return(
        <div>
            <div className={'baseTitle'}>基本设置</div>

            <div>
                <ProForm layout={'vertical'}>
                    <div className={'baseContent'}>
                        <div className={'leftSetting'}>
                            <FormInput label={'邮箱'}/>
                            <FormInput label={'昵称'}/>
                            <FormInputArea label={'个人简介'}/>
                            <FormInput label={'联系电话'}/>
                        </div>

                        <div className={'rightSetting'}>
                            <Form.Item label={'头像'}>
                                <Avatar size={150} icon={<UserOutlined />} />
                            </Form.Item>
                        </div>
                    </div>
                    <Button type={'primary'} htmlType={'submit'}>
                        提交
                    </Button>
                </ProForm>
            </div>
        </div>
    )
};

export default BaseSetting;
