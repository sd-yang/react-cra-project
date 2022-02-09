import React from 'react';
import { Row, Col } from 'antd';

import Involved from './components/involved';
import InvolvedDetail from './components/involvedDetail';

const AccountCenter = () => {
    return(
        <Row gutter={16}>
            <Col span={6}>
                <Involved />
            </Col>

            <Col span={18}>
                <InvolvedDetail />
            </Col>
        </Row>
    )
};

export default AccountCenter;
