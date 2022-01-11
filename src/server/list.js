import { GET, POST } from '../utils/request';

export const getStatus = async () => await GET('/list/getListStatus');
export const getList = async (data) => await POST('/list/getList', data);