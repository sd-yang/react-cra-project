import React, { memo } from 'react';
import { Card, Steps, Skeleton, message } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';

const { Step } = Steps;

const ProcessProgress = (props) => {
    const { request } = props;
    const { data: stepsList } = request;

    const formatDesc = (data) => {
        if (!data) return;
        const results = [];
        const dingNotice = <div><a onClick={handleDing}>催一下 <DingdingOutlined/></a></div>;
        if (data.operator) results.push(<div key={'operator'}>{data.operator} {data.running && dingNotice}</div>);
        if (data.time) results.push(<div key={'time'}>{data.time}</div>);
        return results;
    };

    const handleDing = () => {
        message.success('提醒成功！');
    };

    return (
        <Card title={'流程进度'}>
            {
                !stepsList ?
                    <Skeleton/> :
                    <Steps current={2}>
                        {
                            stepsList.map(item => {
                                return (
                                    <Step key={item.title} title={item.title} description={formatDesc(item)}/>
                                );
                            })
                        }
                    </Steps>
            }
        </Card>
    );
};

export default memo(ProcessProgress);
