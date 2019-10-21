import React, { Fragment } from 'react';
import GridExample1 from './GridExample1';
import GridExample2 from './GridExample2';
import GridExample3 from './GridExample3';

const App = () => {
  return (
    <Fragment>
      <GridExample3 />
      <GridExample1 />
      <GridExample2 />
    </Fragment>
  );
};

export default App;
