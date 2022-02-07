import { GET } from '../utils/request';

export const getOrderDetail = (id) => async () => await GET('/order/getOrderDetail', { params: { id } });

export const getOrderProgress = (id) => async () => await GET('/order/getProgress', { params: { id } });