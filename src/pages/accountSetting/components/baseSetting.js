import React from 'react';
import { Button, Avatar, Form, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ProForm, FormInput } from '../../../components';

const BaseSetting = () => {

    return(
        <Card  title={'基本设置'} bordered={false}>
            <ProForm layout={'vertical'}>
                <div className={'baseContent'}>
                    <div className={'leftSetting'}>
                        <FormInput label={'邮箱'}/>
                        <FormInput label={'昵称'}/>
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
        </Card>
    )
};

export default BaseSetting;
