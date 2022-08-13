import React, { useEffect, useContext, useRef, useLayoutEffect } from 'react';
import { KeepAliveContext } from './keepAliveProvider';
import {
  ACTION_ACTIVE,
  ACTION_CREATE,
  ACTION_INACTIVE,
  ACTION_UPDATE,
  renderWithChildren,
} from './utils';

const KeepAliveItem = (props) => {
  const { cacheId, children, style } = props;
  const { cacheHandle, hasCacheNode } = useContext(KeepAliveContext);
  const parentNode = useRef(null);
  const firstRender = useRef(false);

  const loader = (childrenNode) => {
    parentNode.current.appendChild(childrenNode);
  };

  if (!firstRender.current && !hasCacheNode(cacheId)) {
    cacheHandle({
      actions: ACTION_CREATE,
      payload: { cacheId, children: renderWithChildren(children), loader },
    });
  }

  useLayoutEffect(() => {
    if (!firstRender.current) return;
    cacheHandle({
      actions: ACTION_UPDATE,
      payload: { cacheId, children: renderWithChildren(children) },
    });
  }, [children]);

  useEffect(() => {
    firstRender.current = true;
    cacheHandle({ actions: ACTION_ACTIVE, payload: { cacheId, loader } });
    return () => {
      cacheHandle({ actions: ACTION_INACTIVE, payload: { cacheId } });
    };
  }, []);

  return <div ref={parentNode} style={style}/>;
};

export default KeepAliveItem;
