import React, { useEffect } from 'react';
import { querySearchId } from '../../utils';
import { useRequest } from '../../utils/request';
import { getOrderDetail } from '../../server/detail';

import HeaderInfo from './components/headerInfo';
import ProcessProgress from './components/processProgress';
import OperationRecord from './components/operationRecord';

const DetailInfo = () => {
    const searchId = querySearchId();
    const { loading, data, run } = useRequest(getOrderDetail, { manual: true });

    useEffect(() => {
        run(searchId);
    }, [searchId]);

    console.log(data);

    return (
        <>
            <HeaderInfo />
            <ProcessProgress />
            <OperationRecord />
        </>
    );
};

export default DetailInfo;
