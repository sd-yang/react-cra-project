import React from 'react';
import { List, Switch } from 'antd';

const NoticeSetting = (props) => {
    const { loading } = props;

    const data = [
        { title: '待办任务', key: 'todoTask' },
        { title: '系统消息', key: 'systemTask' }
    ];

    const switchState = (key) => (value) => {
        console.log(key, value);
    };

    return (
        <div>
            <div className={'baseTitle'}>消息通知</div>

            <List
                loading={loading}
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Switch checkedChildren={'开启'} unCheckedChildren={'关闭'} onChange={switchState(item.key)}/>
                        ]}>
                        <List.Item.Meta
                            title={item.title}
                            description={'这是一个描述'}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default NoticeSetting;
