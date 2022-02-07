import React from 'react';
import { querySearchId } from '../../utils';
import { useRequest } from '../../utils/request';
import { getOrderDetail, getOrderProgress } from '../../server/detail';

import HeaderInfo from './components/headerInfo';
import ProcessProgress from './components/processProgress';
import OperationRecord from './components/operationRecord';

const DetailInfo = () => {
    const searchId = querySearchId();
    const queryDetail = useRequest(getOrderDetail(searchId), { formatResult: (data) => data.data });
    const queryProgress = useRequest(getOrderProgress(searchId), { formatResult: (data) => data.data });

    return (
        <>
            <HeaderInfo request={queryDetail}/>
            <ProcessProgress request={queryProgress}/>
            <OperationRecord />
        </>
    );
};

export default DetailInfo;
