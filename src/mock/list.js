export default {
    getListStatus() {
        return {
            data: [
                { label: '正常', value: 'normal' },
                { label: '超时', value: 'timeout' },
                { label: '关闭', value: 'close' },
            ]
        };
    },
    getList(Mock) {
        return {
            type: 'post',
            data: Mock.mock({
                total: 32,
                'data|32': [
                    {
                        'id|+1': 1,
                        'operator': '@cname',
                        'title': '@title',
                        'status|1': ['normal', 'timeout', 'close'],
                        'desc': '@cword(32)',
                        // "time": "@datetime"
                        'time': new Date()
                    }
                ]
            })
        };
    }
};