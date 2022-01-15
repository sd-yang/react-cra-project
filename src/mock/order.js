export default {
    getProgress(Mock) {
        return {
            data: Mock.mock([
                { title: '项目创建', operator: '@cname', time: '2022-01-01 12:12' },
                { title: '部门审批', operator: '@cname', time: '2022-01-01 15:00' },
                { title: '财务复核', operator: '@cname', running: true  },
                { title: '完成' },
            ])
        }
    }
}