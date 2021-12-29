import React, { useState } from "react";
import DrawingCharts from "../../../../components/drawingCharts";

const TaskCompleteMap = () => {
    const [dataSource] = useState([{ value: 0.7 }])
    const options = {
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                radius: '130%',
                center: ['50%', '80%'],
                endAngle: 0,
                min: 0,
                max: 1,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        width: 3,
                        color: [
                            [0.25, '#FF6E76'],
                            [0.5, '#FDDD60'],
                            [0.75, '#58D9F9'],
                            [1, '#7CFFB2']
                        ]
                    }
                },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 6,
                    offsetCenter: [0, '-60%'],
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    length: 2,
                    lineStyle: {
                        color: 'auto',
                        width: 2
                    }
                },
                splitLine: {
                    length: 6,
                    lineStyle: {
                        color: 'auto',
                        width: 2
                    }
                },
                axisLabel: {
                    color: '#464646',
                    fontSize: 14,
                    distance: -40,
                    formatter: function (value) {
                        if (value === 0.875) {
                            return '优';
                        } else if (value === 0.625) {
                            return '良';
                        } else if (value === 0.375) {
                            return '中';
                        } else if (value === 0.125) {
                            return '差';
                        }
                        return '';
                    }
                },
                detail: {
                    fontSize: 22,
                    offsetCenter: [0, '0%'],
                    valueAnimation: true,
                    formatter: function (value) {
                        return Math.round(value * 100) + '%';
                    },
                    color: 'auto'
                },
                data: dataSource
            }
        ]
    };

    return(
        <DrawingCharts options={options} height={150}/>
    )
};

export default TaskCompleteMap;
