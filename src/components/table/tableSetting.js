import React, { memo, useState } from 'react';
import { Button, Popover, List, Checkbox } from 'antd';
import { ToolOutlined, MenuOutlined } from '@ant-design/icons';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const TableSetting = (props) => {
    const { list, setList } = props;
    const [checkedList, setChecked] = useState(list.map(item => item.title));
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(true);

    const SortableItem = SortableElement(({ value }) => (
        <List.Item className={'tb-sort-li'}>
            <MenuOutlined className={'tb-sort-icon'}/>
            <Checkbox value={value}>{value}</Checkbox>
        </List.Item>
    ));

    const handleCheck = (checkedValue) => {
        setChecked(checkedValue);
        setIndeterminate(!!checkedValue.length && checkedValue.length < list.length);
        setCheckAll(checkedValue.length === list.length);
    };

    const onCheckAllChange = e => {
        setChecked(e.target.checked ? list.map(item => item.title) : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const Container = SortableContainer(({ children }) => {
        return <div>
            <div className={'tb-sort-header'}>
                <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={onCheckAllChange}>
                    列展示
                </Checkbox>
            </div>
            <Checkbox.Group onChange={handleCheck} value={checkedList}>
                <List size={'small'} split={false}>
                    {children}
                </List>
            </Checkbox.Group>
        </div>;
    });

    const onSortEnd = ({ oldIndex, newIndex }) => {
        let newList = [...list];
        let sortVal = newList.splice(oldIndex, 1);
        newList.splice(newIndex, 0, sortVal[0]);
        setList(newList);
    };

    const content = (
        <Container onSortEnd={onSortEnd}>
            {list.map((value, index) => (<SortableItem key={`item-${index}`} index={index} value={value.title}/>))}
        </Container>
    );

    return (
        <div style={{ float: 'right', marginTop: -40 }}>
            <Popover content={content} trigger={'click'} placement="topLeft">
                <Button><ToolOutlined/></Button>
            </Popover>
        </div>
    );
};

export default memo(TableSetting);
