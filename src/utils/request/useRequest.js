import { useState, useEffect, useCallback } from 'react';
import { transformRequestData } from "../index";
import ajax from "./index";

const useRequest = (requestData, options = {}) => {
    const { manual = false, onSuccess, formatResult, onError } = options;
    const { url, method = 'get', data, func } = transformRequestData(requestData);
    if (!url && !func) return;
    const [loading, setLoading] = useState(false);
    const [resData, setResData] = useState(undefined);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (manual) return;
        fetchData(data);
    }, [])

    const fetchData = useCallback((runParams) => {
        setLoading(true);
        setError(null);
        let request = func ? func() : ajax({ method, url, data: runParams });
        return request.then((response) => {
                const result = formatResult ? formatResult(response) : response;
                setResData(result);
                if (onSuccess) onSuccess(result);
            }).catch((error) => {
                setError(error);
                if (onError) onError(error);
            })
            .finally(() => setLoading(false));
    }, [])

    return { loading, run: fetchData, data: resData, error }
}

export default useRequest;