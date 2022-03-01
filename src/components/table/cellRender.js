import React from 'react';
import dayjs from 'dayjs';
import { Tooltip, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

const emptyStr = '--';

export const emptyRender = (children = emptyStr) => {
    return children;
};

export const timeFormat = (value, format) => {
    if (!value) return emptyStr;
    return dayjs(value).format(format);
};

// 时间完整渲染
export const timeRender = (value) => {
    return timeFormat(value, 'YYYY-MM-DD HH:mm:ss');
};

// 时间日期渲染
export const dateRender = (value) => {
    return timeFormat(value, 'YYYY-MM-DD');
};

// 展示id跳转详情内容
export const idToDetail = (value, url) => {
    if (!value) return emptyStr;
    return <NavLink to={`${url}/${value}`}>{value}</NavLink>;
};

// 渲染单行省略的内容
export const ellipsisRender = (value) => {
    if (!value) return emptyStr;
    return <Tooltip title={value} placement={'topLeft'}>
        {value}
    </Tooltip>;
};

// 状态渲染
export const statusRender = (value, map) => {
    if (!value) return emptyStr;
    let color, label = map ? map[value] : value;
    switch (value) {
        case 'timeout':
        case 'danger':
            color = 'red';
            break;
        case 'warning':
            color = 'orange';
            break;
        case 'normal':
            color = 'green';
            break;
        default:
    }

    return <Tag color={color}>{label}</Tag>
}