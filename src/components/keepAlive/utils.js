import React from 'react';
export const ACTION_CREATE = 'create';
export const ACTION_ACTIVE = 'active';
export const ACTION_UPDATE = 'update';
export const ACTION_INACTIVE = 'inActive';
export const ACTION_DESTROY = 'destroy';

const isFunction = (data) => {
  return typeof data === 'function';
};

export const renderWithChildren = (children) => (mergeProps) => {
  return children
    ? isFunction(children)
      ? children(mergeProps)
      : React.isValidElement(children)
      ? React.cloneElement(children, mergeProps)
      : null
    : null;
};
