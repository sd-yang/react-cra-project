import { GET } from '../utils/request';

export const getStatus = async () => await GET('/list/getListStatus');