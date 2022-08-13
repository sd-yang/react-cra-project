import React, { useEffect, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import { ACTION_ACTIVE, ACTION_DESTROY, ACTION_INACTIVE } from './utils';
import { KeepAliveContext } from './keepAliveProvider';

const KeepAliveScope = ({ cacheId, children, status, loader }) => {
  const currentDom = useRef();
  const { cacheHandle } = useContext(KeepAliveContext);

  const renderChildren =
    status !== ACTION_INACTIVE || status !== ACTION_DESTROY
      ? children
      : () => null;

  const element = ReactDOM.createPortal(
    <div
      ref={currentDom}
      style={{ display: status === ACTION_INACTIVE ? 'none' : 'block' }}
    >
      {renderChildren()}
    </div>,
    document.body
  );

  useEffect(() => {
    if (status === ACTION_ACTIVE) {
      loader && loader(currentDom.current);
    } else if (status === ACTION_INACTIVE) {
      document.body.appendChild(currentDom.current);
      cacheHandle({
        actions: ACTION_INACTIVE,
        payload: { cacheId },
      });
    }
  }, [status]);

  return element;
};

export default KeepAliveScope;
