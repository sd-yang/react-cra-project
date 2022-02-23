# React 后台管理类项目

**后台管理类系统的便捷开发模版** 

- react hooks 函数式组件开发
- UI组件库使用 ant design
- 使用 mock.js 进行数据模拟
- 使用 day.js 进行时间处理
- 使用 axios 进行数据交互
- 使用 react-redux && @reduxjs/toolkit 进行状态管理
- echarts 进行图表展示


### 目录结构 TODO


### TO DO LIST

- [ ] 页面构建
    - [x] 登陆页
    - [ ] 大盘展示
    - [ ] 列表页
    - [ ] 详情页
    - [ ] 配置中心
- [x] 引入状态管理器组织数据
- [x] 引入 `mock` 进行数据模拟
- [ ] 拆分封装组件，编写 hooks 组件
- [ ] 优化项目
- [x] 皮肤更换，夜间模式
- [ ] 优化项目及页面性能


#### Hooks封装

1. useRequest
- [ ] 轮询
- [x] 可直接传入 `request`、或者请求参数进行调用
- [x] 返回状态，结果，方法

2. - [ ]  usePage  
    直接管理请求的分页内容，返回分页所需要的参数

3. - [x] useToggle
4. - [x] useBoolean
5. - [ ] useObserveResize  
    管理判断DOM大小改变
