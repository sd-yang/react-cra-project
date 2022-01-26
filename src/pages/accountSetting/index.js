import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const SettingPage = () => {
    const [test, setTest] = useState(1);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        func()
    }, [refresh])

    const func = () => {
        console.log(test);
    };

    const fun = () => {
        setRefresh(new Date().getTime());
    }

    const handleTest = () => {
        setTest(2);
        fun()
    }

    return (
        <div>
            <Button onClick={handleTest}>测试</Button>
        </div>
    )
};

export default SettingPage;
