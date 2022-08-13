import React, { useState, useRef } from 'react';
import * as ACTIONS from './utils';

// 维护一个存储区，每一个组件需要由自己的状态 status，node，key
class KeepAlive {
  constructor(updater) {
    this.cacheStore = [];
    this.updater = updater;
  }

  cacheHandle = ({ payload, actions }) => {
    if (!this[actions]) return;
    this[actions](payload);
    actions !== ACTIONS.ACTION_CREATE && this.updater({});
  };

  hasCacheNode = (cacheId) => {
    if (this.cacheStore.find((item) => item.cacheId === cacheId)) return true;
    return false;
  };

  // 组件注册
  [ACTIONS.ACTION_CREATE]({ cacheId, children, loader }) {
    const item = {
      cacheId,
      status: ACTIONS.ACTION_CREATE,
      children,
      updater: this.updater,
      loader, // 将组件重新加载到父元素上
    };
    this.cacheStore.push(item);
  }

  // 组件更新
  [ACTIONS.ACTION_UPDATE] = ({ cacheId, children }) => {
    for (const item of this.cacheStore) {
      if (item.cacheId === cacheId) {
        item.children = children;
      }
    }
  };

  // 激活状态
  [ACTIONS.ACTION_ACTIVE] = ({ cacheId, loader }) => {
    for (const item of this.cacheStore) {
      if (item.cacheId === cacheId) {
        item.status = ACTIONS.ACTION_ACTIVE;
        item.loader = loader;
      }
    }
  };

  // 失活
  [ACTIONS.ACTION_INACTIVE] = ({ cacheId }) => {
    for (const item of this.cacheStore) {
      if (item.cacheId === cacheId) {
        item.status = ACTIONS.ACTION_INACTIVE;
      }
    }
  };

  // 取消缓存
  off() {}
}

const useKeep = () => {
  const instance = useRef(false);
  const [, setState] = useState();
  if (!instance.current) {
    instance.current = new KeepAlive(setState);
  }

  return {
    cacheStore: instance.current.cacheStore,
    cacheHandle: instance.current.cacheHandle,
    hasCacheNode: instance.current.hasCacheNode,
  };
};

export default useKeep;
