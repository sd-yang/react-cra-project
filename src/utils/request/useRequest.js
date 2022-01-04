import { useState, useEffect, useCallback } from 'react';
import { transformRequestData } from "../index";
import ajax from "./index";

const useRequest = (requestData, options = {}) => {
    const { manual = false, onSuccess, formatResult } = options;
    const { url, method = 'get', data } = transformRequestData(requestData);
    if (!url) return;
    const [loading, setLoading] = useState(false);
    const [resData, setResData] = useState(undefined);

    useEffect(() => {
        if (manual) return;
        fetchData(data);
    }, [])

    const fetchData = useCallback(async (runParams) => {
        setLoading(true);
        const response = await ajax({ method, url, data: runParams });
        const result = formatResult ? formatResult(response) : response;
        setResData(result);
        setLoading(false);
        if (onSuccess) onSuccess(result);
    }, [])

    return { loading, run: (runParams) => fetchData(runParams), data: resData }
}

export default useRequest;