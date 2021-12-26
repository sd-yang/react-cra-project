import Mock from 'mockjs';

const responseObj = { code: 0, status: 'success' };

const useDataInfo = () => {
    return {
        ...responseObj,
        data: { name: 'Rick', type: 'admin' }
    }
}

Mock.mock('/user/getUserInfo', 'get', useDataInfo);