import React from 'react';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';

const emptyStr = '--';

export const emptyRender = (children = emptyStr) => {
    return children;
};

export const timeFormat = (value, format) => {
    if (!value) return emptyStr;
    return dayjs(value).format(format);
};

export const timeRender = (value) => {
    return timeFormat(value, 'YYYY-MM-DD HH:mm:ss');
};

export const dateRender = (value) => {
    return timeFormat(value, 'YYYY-MM-DD');
}

export const idToDetail = (value, url) => {
    if (!value) return emptyStr;
    return <NavLink to={`${url}/${value}`}>{value}</NavLink>
}