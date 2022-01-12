import React, { useMemo } from 'react';
import { List, Card } from 'antd';

const cardStyle = { width: 300, height: 350, margin: 'auto' };

const CardList = (props) => {
    const { request } = props;
    const { loading, data } = request;
    const dataSource = useMemo(() => data?.data?.data, [data]);

    return (
        <List
            loading={loading}
            grid={{ gutter: 16 }}
            dataSource={dataSource}
            renderItem={item => (
                <List.Item style={{ color: 'red'}}>
                    <Card title={item.title} hoverable={true} style={cardStyle}>
                        Card content
                    </Card>
                </List.Item>
            )}
        />
    );
};

export default CardList;
