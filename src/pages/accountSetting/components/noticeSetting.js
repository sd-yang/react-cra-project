import React from 'react';
import { List, Switch } from 'antd';

const NoticeSetting = () => {

    const data = [
        { title: '待办任务' },
        { title: '系统消息' }
    ];

    return (
        <div>
            <div className={'baseTitle'}>消息通知</div>

            <List
                dataSource={data}
                renderItem={item => (
                    <List.Item actions={[<Switch checkedChildren={'开启'} unCheckedChildren={'关闭'}/>]}>
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
