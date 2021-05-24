import React from 'react';
import { NavigationOne } from './navigation-screen-a';
import { NavigationTwo } from './navigation-screen-b';
import { NavigationThree } from './navigation-screen-c';
import { NavBar } from './navbar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/navigation-screen-a" component={NavigationOne} />
        <Route exact path="/">
          <Redirect to="/navigation-screen-a" />
        </Route>
        <Route exact path="/navigation-screen-b" component={NavigationTwo} />
        <Route exact path="/navigation-screen-c" component={NavigationThree} />
      </Switch>
    </div>
  );
};