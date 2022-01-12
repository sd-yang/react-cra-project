import { useState, useEffect, useCallback, useRef } from 'react';
import { transformRequestData } from '../index';
import ajax from './index';

const useRequest = (requestData, options = {}) => {
    const { manual = false, onSuccess, formatResult, onError } = options;
    const { url, method = 'get', data, req } = transformRequestData(requestData);
    if (!url && !req) return {};

    const reqOrder = useRef(0);
    const [loading, setLoading] = useState(false);
    const [resData, setResData] = useState(undefined);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (manual) return;
        fetchData(data);
        return () => {
            // 组件销毁后阻止渲染
            reqOrder.current += 1;
        };
    }, []);

    const fetchData = useCallback((runParams) => {
        setLoading(true);
        setError(null);
        reqOrder.current += 1;
        const thisOrder = reqOrder.current;
        let request = req ? req(runParams) : ajax({ method, url, data: runParams });
        return request
            .then((response) => {
                if (thisOrder !== reqOrder.current) return;
                const result = formatResult ? formatResult(response.data) : response.data;
                setResData(result);
                if (onSuccess) onSuccess(result);
            })
            .catch((error) => {
                if (thisOrder !== reqOrder.current) return;
                setError(error);
                if (onError) onError(error);
            })
            .finally(() => {
                if (thisOrder !== reqOrder.current) return;
                setLoading(false);
            });
    }, []);

    return { loading, run: fetchData, data: resData, error };
};

export default useRequest;