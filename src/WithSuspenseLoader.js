import React, { Suspense } from 'react';

const WithSuspensLoader = (Component: component) => (props) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component {...props}/>
    </Suspense>)
}

export default WithSuspensLoader;