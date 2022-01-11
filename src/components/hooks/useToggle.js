import React, { useCallback, useState } from "react";

const useToggle = (defaultValue, reverseValue) => {
    const [state, setState] = useState(defaultValue || false);

    const toggle = useCallback(() => {
        const isBool = defaultValue === false || !defaultValue;
        const toggleState = isBool ? !state : (state === defaultValue ? reverseValue : defaultValue);
        setState(toggleState);
    }, [state]);

    const setValue = useCallback((value) => {
        setState(value);
    }, []);

    return { state, toggle, set: setValue };
};

export default useToggle;