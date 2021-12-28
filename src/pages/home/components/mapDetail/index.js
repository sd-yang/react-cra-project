import React from 'react';
import { Card } from "antd";
import ChartsMap from "./map";

const MapDetail = () => {
    return(
        <Card title={'实时数据大盘'}>
            <ChartsMap />
        </Card>
    )
};

export default MapDetail;
