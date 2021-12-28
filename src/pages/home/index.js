import React from 'react';
import { Row, Col } from "antd";

import MapDetail from "./components/mapDetail";

const HomePage = () => {
    return(
        <div>
            <Row>
                {/*<Col></Col>*/}
                {/*<Col></Col>*/}
                {/*<Col></Col>*/}
            </Row>

            <Row>
                <Col span={24}>
                    <MapDetail />
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;
