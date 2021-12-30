import React from "react";
import { Statistic } from "antd";
import CardTitle from "./cardTitle";
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

const TotalInfo = () => {
    return(
        <>
            <Statistic
                title={<CardTitle title={'总销售额'} />}
                prefix={'¥'}
                value={188908}
                valueStyle={{ fontSize: '32px' }}
            />
            <div className={'cardContent'}>
                <div className={'dataWrap'}>
                    <div>
                        <span>周同比</span>
                        <span>10 %</span>
                        <CaretUpOutlined style={{ color: '#f5222d', fontSize: 12 }}/>
                    </div>
                    <div>
                        <span>日同比</span>
                        <span>6 %</span>
                        <CaretDownOutlined style={{ color: '#52c41a', fontSize: 12 }}/>
                    </div>
                </div>
            </div>
            <div className={'cardFooter'}>
                <span>日销售额</span>
                <span>¥ 12,423</span>
            </div>
        </>
    )
};

export default TotalInfo;
