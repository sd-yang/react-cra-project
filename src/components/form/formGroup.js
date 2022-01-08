import React from "react";
import { Col, Row } from "antd";

export const colSpan = { xs: 24, sm: 16, md: 12, lg: 8, xl: 6 };

const FormGroup = (props) => {
    return(
        <Row gutter={[16, 16]}>
            <Col key={'title'} span={props.title ? 24 : 0}>
                {props.title}
            </Col>
            {
                React.Children.map(props.children, (child, idx) => {
                    if (child.props.flex === 'auto') return child;
                    return <Col key={idx} {...colSpan}>
                        {child}
                    </Col>
                })
            }
        </Row>
    )
}

export default FormGroup;
