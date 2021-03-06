import Qs from 'qs';
import { useParams } from 'react-router-dom';

// 转化request请求对象
export const transformRequestData = (data) => {
    if (!data) return {};
    if (typeof data === 'function') return { req: data };
    if (typeof data === 'string') return { url: data };
    if (Object.prototype.toString.apply(data) !== 'object Object') return {};
    const results = { ...data };
    if (results.params && results.url) {
        results.url += Qs.stringify(results.params);
        delete results.params;
    }
    return results;
};

// 根据角色筛选路由信息
export const filterRoutesByRole = (list, role) => {
    if (!list || list.length === 0) return [];
    return list.reduce((total, current) => {
        if (current.role && current.role !== role) return total;
        if (current.children) return [...total, ...filterRoutesByRole(current.children, role)];
        return [...total, current];
    }, []);
};

// 筛选出菜单信息
export const filterMenuList = (list, role) => {
    if (!list) return [];
    return list.filter(k => (!k.role || k.role === role) && k.title).map(item => {
        const info = { ...item };
        delete info.component;
        if (info.children) info.children = filterMenuList(item.children);
        return info;
    });
};

// 获取查询参数
export const querySearchId = () => {
    const { id } = useParams();
    return id;
};

// 存值
export const setStorage = (name, value) => {
    const stringValue = JSON.stringify(value);
    window.localStorage.setItem(name, stringValue);
};

// 取值
export const getStorage = (name) => {
    let getValue = window.localStorage.getItem(name);
    try {
        return JSON.parse(getValue);
    } catch (e) {
        return getValue;
    }
};