const Mock = require('mockjs');
const requireServices = require.context('./', true, /[a-zA-Z]\w+\.js/);
const mockServers = {};
requireServices.keys().filter(item => item !== './index.js').forEach(fileName => {
    const serverName = fileName.split('/').pop().split('.')[0];
    mockServers[serverName] = requireServices(fileName).default || requireServices(fileName);
});

Mock.setup({ timeout: 1500 });
const responseObj = { code: 0, status: 'success' };

Object.keys(mockServers).forEach(serverName => {
    let mockServer = mockServers[serverName];
    Object.keys(mockServer).forEach(api => {
        let url = '/' + serverName + '/' + api + '.*';
        let result = mockServer[api](Mock);
        Mock.mock(RegExp(url), result.type || 'get', function () {
            return {
                ...responseObj,
                data: result.data
            };
        });
    });
});