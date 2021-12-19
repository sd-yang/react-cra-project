import NotFound from '../pages/404';
import HomePage from '../pages/home';

const baseRouter = [
    { path: '/', component: <HomePage /> },
    // 匹配任何非空路径
    { path: '*', component: <NotFound /> }
];

export default baseRouter;
