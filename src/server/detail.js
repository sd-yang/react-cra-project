import { GET } from '../utils/request';

export const getOrderDetail = async (id) => await GET('/order/getOrderDetail', { params: { id }});