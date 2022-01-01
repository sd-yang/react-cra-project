import React from "react";
import { Row, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const CardTitle = (props) => {
    const { tips = '提示信息', title } = props;
    return(
        <Row justify={"space-between"}>
            <div>{title}</div>
            <Tooltip title={tips} placement={"bottom"}>
                <InfoCircleOutlined />
            </Tooltip>
        </Row>
    )
};

export default CardTitle;
