import React from 'react';

import Auxiliary from '../../hoc/Auxiliary.js';
import classes from './Layout.module.css';

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Contents}>
      {props.children}
    </main>
  </Auxiliary>
);

export default Layout;