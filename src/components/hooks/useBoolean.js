import React, { useCallback, useState } from 'react';

const useBoolean = (bool = false) => {
    const [state, setState] = useState(bool);

    const toggle = useCallback(() => {
        setState(!state);
    }, [state]);

    const set = useCallback((value) => {
        setState(value);
    }, [])

    return { state, toggle, set, setTrue: () => set(true), setFalse: () => set(false) }
};

export default useBoolean;
