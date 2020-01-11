import React, { Fragment } from 'react';
import './style.css';
import Home from '../../components/home/Index';
import { observer } from 'mobx-react-lite';

const App = () => {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}

export default observer(App);
