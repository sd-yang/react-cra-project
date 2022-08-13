import { GET, POST } from '../utils/request';

export const getStatus = (type) => async () => await GET('/list/getListStatus', { params: { type } });
export const getList = async (data) => await POST('/list/getList', data);