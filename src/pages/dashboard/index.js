import React from 'react';
import { Row, Col, Card } from "antd";

import TotalInfo from "./components/totalInfo";
import TaskComplete from "./components/taskComplete";
import RatioInfo from "./components/ratioInfo";
import RealTimeInfo from "./components/realTimeInfo";
import ChinaMap from "./components/mapDetail/chinaMap";
import './index.less';

const cardProps = {
    size: 'small',
    bodyStyle: { padding: '20px 24px 8px', height: 244 }
};

// TODO 自适应
const HomePage = () => {
    return (
        <div className={'homeWrap'}>
            <Row gutter={[25, 20]} wrap>
                <Col span={6}>
                    <Card {...cardProps}>
                        <TotalInfo />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card {...cardProps}>
                        <TaskComplete/>
                    </Card>
                </Col>

                <Col span={6}>
                    <Card {...cardProps}>
                        <RatioInfo />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card {...cardProps}>
                        <RealTimeInfo />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card title={'实时数据大盘'}>
                        <ChinaMap/>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;
