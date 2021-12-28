import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import * as echarts from 'echarts';
import chinaJson from './china.json';

const ChartsMap = () => {
    let myCharts;
    const ref = useRef()
    console.log('render')
    const init = () => {
        echarts.registerMap('china', chinaJson);
        myCharts = echarts.init(document.getElementById('map-content-wrap'));
    };

    useEffect(() => {
        console.log(2)
        setTimeout(() => console.log(document.getElementById('map-content-wrap').clientWidth))

        // init();
        // drawing();
        // return () => {
        //     myCharts.dispose();
        // }
    }, []);

    useLayoutEffect(() => {
        console.log(1)
        console.log(document.getElementById('map-content-wrap').clientWidth);
        console.log(ref.current.clientWidth)
    })

    const drawing = () => {
        let optionMap = {
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
        };

        //使用制定的配置项和数据显示图表
        myCharts.setOption(optionMap);
        myCharts.resize();
    };

    return(
        <div ref={ref} id={'map-content-wrap'} style={{ width: '100%', height: 550, overflow: 'hidden', clear: 'both' }}/>
    )
};

export default ChartsMap;
