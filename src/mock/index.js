import Mock from 'mockjs';

const responseObj = { code: 0, status: 'success' };

const useDataInfo = () => {
    return {
        ...responseObj,
        data: { name: 'Rick', type: 'admin' }
    }
}

const getStatus = () => {
    return {
        ...responseObj,
        data: [
            { label: '正常', value: 'normal' },
            { label: '超时', value: 'timeout' },
            { label: '关闭', value: 'close' },
        ]
    }
}

Mock.setup({ timeout: 1500 });
Mock.mock('/user/getUserInfo', 'get', useDataInfo);
Mock.mock('/list/getListStatus', 'get', getStatus);