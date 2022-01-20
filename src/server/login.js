import { GET } from '../utils/request';

export const getPhoneCode = async (phone) => await GET('/user/getUserInfo', { params: { phone } });