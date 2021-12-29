import React, { useRef } from "react";
import DrawingCharts from "../../../../components/drawingCharts";
import chinaJson from './china.json';

const ChinaMap = () => {
    const childRef = useRef();
    const init = () => {
        childRef.current.echarts.registerMap('china', chinaJson);
    };

    const options = {
        tooltip : {
            trigger: 'item'
        },
        //配置属性
        series: [{
            type: 'map',
            map: 'china',
            roam: true,
            // zoom: 1.1,
            label: {
                // normal: {
                //     show: false  //省份名称
                // },
                // emphasis: {
                //     show: false
                // }
            },
        }]
    }

    return(
        <DrawingCharts ref={childRef} init={init} options={options}/>
    )
};

export default ChinaMap;
