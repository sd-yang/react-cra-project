import React, { useState } from 'react';
import { Badge, Button, Dropdown, Card } from "antd";
import { BellOutlined } from "@ant-design/icons";

const NoticesNode = () => {
    const [visible, setVisible] = useState(false);

    const tabList = [
        { key: 'notice', title: '通知' },
        { key: 'todo', title: '待办' },
    ]

    // TODO 获取通知待办内容列表
    const handleTabChange = (key) => {

    }

    const content = (
        <div>
            <Card
                style={{ width: 300 }}
                actions={['清空通知', '查看更多']}
                tablist={tabList}
                onTabChange={handleTabChange}
            >
                Notice
            </Card>
        </div>
    )

    return (
        <Badge count={12} size={'small'} offset={[0, 5]}>
            <Dropdown
                overlay={content}
                trigger={['click']}
                overlayStyle={{ paddingTop: 5 }}
                visible={visible}
                onVisibleChange={setVisible}
            >
                <Button type={'text'} icon={<BellOutlined/>} className={'bell'}/>
            </Dropdown>
        </Badge>
    )
};

export default NoticesNode;
