import React from "react";
import { Statistic } from "antd";
import CardTitle from "./common/cardTitle";
import DrawingCharts from "../../../components/drawingCharts";

const RatioInfo = () => {

    const options = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['42%', '60%'],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                data: [
                    { value: 1048, name: '食品' },
                    { value: 735, name: '服饰' },
                    { value: 580, name: '电子产品' },
                    { value: 484, name: '其他' },
                    { value: 300, name: '电器' }
                ]
            }
        ]
    };

    return(
        <>
            <Statistic title={<CardTitle title={'销售占比'}/>} valueStyle={{ display: 'none' }}/>
            <DrawingCharts options={options} height={150}/>
            <div className={'cardFooter'}>
                <span>前景展望</span>
                <span>持续性良好</span>
            </div>
        </>
    )
};

export default RatioInfo;
