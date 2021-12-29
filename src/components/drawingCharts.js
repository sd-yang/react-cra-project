import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import * as echarts from 'echarts';

const DrawingCharts = (props, ref) => {
    let myCharts;
    const { id, init, options, height = 520 } = props;
    const [contentId] = useState(id || Math.random().toString(36).substr(2));

    useImperativeHandle(ref, () => ({
        echarts
    }));

    useEffect(() => {
        if (init) init();
        myCharts = echarts.init(document.getElementById(contentId));

        const resizeFn = () => myCharts.resize();
        window.addEventListener('resize', resizeFn);
        return () => {
            myCharts.dispose();
            window.removeEventListener('resize', resizeFn);
        }
    }, []);

    useEffect(() => {
        if (!options || !myCharts) return;
        myCharts.setOption(options);
    }, [options])

    return (
        <div id={contentId} style={{ width: '100%', height }}/>
    )
};

export default forwardRef(DrawingCharts);
