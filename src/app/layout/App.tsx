import React, { Fragment } from 'react';
import './style.css';
import Home from '../../components/home/Index';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={Home} />
    </Fragment>
  );
}

export default observer(App);
