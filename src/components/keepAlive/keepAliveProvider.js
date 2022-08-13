import React from 'react';
import useKeep from './useKeep';
import ScopeItem from './keepAliveScope';

export const KeepAliveContext = React.createContext({});
const KeepAliveProvider = (props) => {
  const { cacheHandle, cacheStore, hasCacheNode } = useKeep();

  const context = {
    cacheHandle,
    hasCacheNode
  };

  return(
    <KeepAliveContext.Provider value={context}>
      {props.children}
      {cacheStore.map(item => <ScopeItem key={item.cacheId} {...item} />)}
    </KeepAliveContext.Provider>
  )
};

export default KeepAliveProvider;
