import React from 'react';
import dayjs from 'dayjs';

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