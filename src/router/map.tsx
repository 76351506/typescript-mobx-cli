import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export interface IRouterMapProps extends React.HTMLProps<HTMLDivElement> {
  routes: any[];
}

class RouterMap extends Component<IRouterMapProps, any> {
  render() {
    const { routes } = this.props;
    const defaultRoute = (
      <Redirect from='/' to='/home' key={'default'} exact></Redirect>
    );
    return (
      <Switch>
        {routes
          .map((item, index) => {
            const children = item.children === undefined ? [] : item.children;
            const Comp = item.component;
            return (
              <Route
                key={item.name}
                path={item.path}
                component={() => {
                  return <Comp routes={children}></Comp>;
                }}
              />
            );
          })
          .concat([defaultRoute])}
      </Switch>
    );
  }
}
export default RouterMap;
