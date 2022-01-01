import React from "react";
import { Statistic } from "antd";
import CardTitle from "./common/cardTitle";
import DrawingCharts from "../../../components/drawingCharts";

const RealTimeInfo = () => {

    const options = {};

    return(
        <>
            <Statistic title={<CardTitle title={'实时销售'}/>} valueStyle={{ display: 'none' }}/>
            <DrawingCharts options={options} height={150}/>
            <div className={'cardFooter'}>
                <span>销量</span>
                <span>1234</span>
            </div>
        </>
    )
};

export default RealTimeInfo;
