import { useState, useEffect, useCallback } from 'react';
import { transformRequestData } from "../index";
import ajax from "./index";

const useRequest = (requestData, options = {}) => {
    const { manual = false } = options;
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
        setResData(response);
        setLoading(false);
    }, [])

    return { loading, run: (runParams) => fetchData(runParams), data: resData }
}

export default useRequest;