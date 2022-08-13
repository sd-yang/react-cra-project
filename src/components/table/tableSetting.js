import React, { memo, useState } from 'react';
import { Button, Popover, List, Checkbox } from 'antd';
import { ToolOutlined, MenuOutlined } from '@ant-design/icons';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const TableSetting = (props) => {
    const { list, setList, origin, setOrigin, afterSetColumn } = props;
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
        let newList = origin.filter(k => checkedValue.includes(k.title));
        setList(newList);
        storeNewColumns(newList);
    };

    const onCheckAllChange = e => {
        setChecked(e.target.checked ? origin.map(item => item.title) : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        const newList = e.target.checked ? origin : [];
        setList(newList);
        storeNewColumns(newList);
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
        const newColumns = sortList(list, oldIndex, newIndex);
        setList(newColumns);
        setOrigin(sortList(list, oldIndex, newIndex));
        storeNewColumns(newColumns);
    };

    const sortList = (arr, oldIndex, newIndex) => {
        let newList = [...arr];
        let spliceVal = newList.splice(oldIndex, 1)[0];
        newList.splice(newIndex, 0, spliceVal);
        return newList;
    };

    // 保存更改后的数据
    const storeNewColumns = (list) => {
        if (afterSetColumn) afterSetColumn(list);
        console.log(list);
    };

    const content = (
        <Container onSortEnd={onSortEnd}>
            {origin.map((value, index) => (<SortableItem key={`item-${index}`} index={index} value={value.title}/>))}
        </Container>
    );

    return (
        <Popover content={content} trigger={'click'} placement="topLeft">
            <Button><ToolOutlined/></Button>
        </Popover>
    );
};

export default memo(TableSetting);
