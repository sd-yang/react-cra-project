import React from 'react';
import { Card } from 'antd';

const InvolvedDetail = (props) => {
    const {} = props;

    return(
        <div>
            <Card title={'星图'}>
                <Card title={'待处理'} type={'inner'}>

                </Card>

                <Card title={'消息通知'} type={'inner'} style={{ marginTop: 15 }}>

                </Card>
            </Card>
        </div>
    )
}

export default InvolvedDetail;
