import React, { useState } from 'react';
import { Menu } from 'antd';
import './index.less';

import BaseSetting from './components/baseSetting';
import NoticeSetting from './components/noticeSetting';

const SettingPage = () => {
    const [selectKey, setSelectKey] = useState('base');

    const list = [
        { title: '基本设置', key: 'base', content: <BaseSetting/> },
        { title: '消息通知', key: 'notice', content: <NoticeSetting /> }
    ];

    const handleSelect = ({ key }) => {
        setSelectKey(key);
    };

    return (
        <div className={'pageColor settingWrap'}>
            <Menu mode={'inline'} selectedKeys={[selectKey]} onSelect={handleSelect}>
                {
                    list.map(item => {
                        return <Menu.Item key={item.key}>
                            {item.title}
                        </Menu.Item>;
                    })
                }
            </Menu>

            <div className={'rightContent'}>
                {list.find(item => item.key === selectKey)?.content}
            </div>
        </div>
    );
};

export default SettingPage;
