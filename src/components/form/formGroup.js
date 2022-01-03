import React from "react";
import { Col, Row } from "antd";

// TODO
const FormGroup = (props) => {
    const { span = 24 } = props;

    return(
        <Row wrap={true}>
            {
                props.children.map((item, idx) => {
                    return <Col span={span} key={idx}>
                        {item}
                    </Col>
                })
            }
        </Row>
    )
}

export default FormGroup;
