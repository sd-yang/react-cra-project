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

const getList = () => {
    return {
        ...responseObj,
        data: Mock.mock({
            total: 32,
            "data|32": [
                {
                    "id|+1": 1,
                    "operator": "@cname",
                    "title": "@title",
                    "status|1": ['normal', 'timeout', 'close'],
                    "desc": "@cword(32)",
                    // "time": "@datetime"
                    "time": new Date()
                }
            ]
        })
    }
}

Mock.setup({ timeout: 1500 });
Mock.mock('/user/getUserInfo', 'get', useDataInfo);
Mock.mock('/list/getListStatus', 'get', getStatus);
Mock.mock('/list/getList', 'post', getList);