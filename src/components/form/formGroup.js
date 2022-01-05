import React from "react";
import { Col, Row } from "antd";
import { colSpan } from "./index";

const FormGroup = (props) => {
    return(
        <Row gutter={[16, 16]}>
            <Col key={'title'} span={props.title ? 24 : 0}>
                {props.title}
            </Col>
            {
                React.Children.map(props.children, (value, idx) => {
                    return <Col key={idx} {...colSpan}>
                        {value}
                    </Col>
                })
            }
        </Row>
    )
}

export default FormGroup;
