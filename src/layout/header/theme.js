import React from 'react';
import { Switch } from 'antd';
import { setStorage, getStorage } from '../../utils';
import { useToggle } from '../../components';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/main';

const Theme = () => {
    const { state, toggle } = useToggle(getStorage('theme') === 'custom-dark');
    const dispatch = useDispatch();

    const handeSwitch = (checked) => {
        const theme = checked ? 'custom-dark' : 'custom-default';
        setStorage('theme', theme);
        dispatch(setTheme(theme));
        toggle();
    };

    return(
        <Switch
            checked={state}
            className={'themeSwitch'}
            checkedChildren={'🌛'}
            unCheckedChildren={'🌞'}
            onChange={handeSwitch}
        />
    )
};

export default Theme;
