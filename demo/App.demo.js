import React, { Fragment } from 'react';
import GridDemo1 from './Grid1.demo';
import GridDemo2 from './Grid2.demo';
import GridDemo3 from './Grid3.demo';

const App = () => (
  <Fragment>
    <div style={{ border: '1px solid', padding: '10px', marginBottom: '10px' }}>
      <GridDemo1 />
    </div>
    <div style={{ border: '1px solid', padding: '10px', marginBottom: '10px' }}>
      <GridDemo2 />
    </div>
    <div style={{ border: '1px solid', padding: '10px' }}>
      <GridDemo3 />
    </div>
  </Fragment>
);

export default App;
