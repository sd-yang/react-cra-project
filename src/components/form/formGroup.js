import React from "react";
import { Col, Row } from "antd";

// TODO
const FormGroup = (props) => {
    const { span = 24 } = props;

    return(
        <Row wrap={true}>
            {
                React.Children.map(props.children, (value, idx) => {
                    return <Col span={span} key={idx}>
                        {value}
                    </Col>
                })
            }
        </Row>
    )
}

export default FormGroup;
