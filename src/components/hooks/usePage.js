import React, { useEffect, useState } from 'react';
import { useRequest } from '../../utils/request';

const defaultData = {
    current: 1,
    pageSize: 10,
};

const usePage = (req, options = {}) => {
    const { refreshDeps } = options;
    const [current, setCurrent] = useState(defaultData.current);
    const [pageSize, setPageSize] = useState(defaultData.pageSize);

    const getData = useRequest(req, options);

    useEffect(() => {
        getData.run({ ...refreshDeps, skip: 0, take: pageSize })
    }, [refreshDeps]);

    const onChange = (page, size) => {
        setCurrent(page);
        setPageSize(size);
        getData.refresh({ skip: (page - 1) * size, take: size });
    };

    return { ...getData, pageProps: { current, pageSize, onChange } };
};

export default usePage;