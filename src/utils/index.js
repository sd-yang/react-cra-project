import Qs from 'qs';

export const transformRequestData = (data) => {
    if (!data) return {};
    if (typeof data === 'string') return { url: data };
    if (Object.prototype.toString.apply(data) !== 'object Object') return {};
    const results = { ...data };
    if (results.params && results.url) {
        results.url += Qs.stringify(results.params);
        delete results.params;
    }
    return results;
}
