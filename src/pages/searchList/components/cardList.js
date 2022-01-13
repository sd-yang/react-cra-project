import React, { useMemo } from 'react';
import { List, Card } from 'antd';

const cardStyle = { width: 320, height: 250, margin: 'auto' };

const CardList = (props) => {
    const { request } = props;
    const { loading, data } = request;
    const dataSource = useMemo(() => data?.data?.data, [data]);

    // TODO 自动排序填充
    return (
        <List
            loading={loading}
            grid={{ gutter: 16, xs: 24, xl: 5 }}
            dataSource={dataSource}
            renderItem={item => (
                <List.Item style={{ color: 'red'}}>
                    <Card title={item.title} hoverable={true} style={cardStyle}>
                        Card content
                    </Card>
                </List.Item>
            )}
            pagination={{

            }}
        />
    );
};

export default CardList;
