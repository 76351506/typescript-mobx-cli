import React from 'react';
import RouterMap from '@/router/map';
import Routes from '@/router/routes';

interface IRouterView {
  routes?: any[];
}
const RouterView = (props: IRouterView) => {
  const routes = props.routes ? props.routes : Routes;
  return <RouterMap routes={routes} {...props}></RouterMap>;
};

export default RouterView;
