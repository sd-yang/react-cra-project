import React from 'react';
import { Row, Col, Card } from "antd";

import TaskComplete from "./components/mapDetail/taskComplete";
import ChinaMap from "./components/mapDetail/chinaMap";

const HomePage = () => {
    return (
        <div>
            <Row gutter={[30, 20]} wrap>
                <Col span={6}>
                    <Card>

                    </Card>
                </Col>

                <Col span={6}>
                    <Card title={'完成度'}>
                        <TaskComplete/>
                    </Card>
                </Col>

                <Col span={12}>
                    <Card title={'1'}>

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
