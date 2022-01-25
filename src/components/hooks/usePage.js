import React, { useCallback, useEffect, useState } from 'react';
import { useRequest } from '../../utils/request';

const defaultData = {
    current: 1,
    pageSize: 10,
};

const usePage = (req, options = {}) => {
    const { refreshDeps } = options;
    const [current, setCurrent] = useState(defaultData.current);
    const [pageSize, setPageSize] = useState(defaultData.pageSize);

    const getData = useRequest(req, { initParams: { skip: 0, take: pageSize }, ...options });

    useEffect(() => {
        if (!refreshDeps) return;
        getData.run({ ...refreshDeps, skip: 0, take: pageSize });
        setCurrent(1);
    }, [refreshDeps]);

    const onChange = useCallback((page, size) => {
        setCurrent(page);
        setPageSize(size);
        getData.refresh({ skip: (page - 1) * size, take: size });
    }, []);

    // 刷新请求，重置分页
    const resetRun = useCallback((value) => {
        setCurrent(1);
        getData.run({ ...value, skip: 0, take: pageSize });
    }, [pageSize]);

    // 按照上次的请求参数，重置分页
    const refreshPage = useCallback(() => {
        getData.refresh({ skip: 0, take: pageSize });
        setCurrent(1);
    }, [pageSize]);

    return { ...getData, resetRun, refreshPage, pageProps: { current, pageSize, onChange } };
};

export default usePage;