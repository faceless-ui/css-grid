import React, { useEffect, useRef } from 'react';
import { GridProvider } from '../src';
import Cell from '../src/Cell';
import Grid from '../src/Grid';

const App: React.FC = () => {
  const gridRef = useRef(null);
  const cellRef = useRef(null);

  useEffect(() => {
    console.log('gridRef', gridRef);
    console.log('cellRef', cellRef);
  }, []);

  return (
    <GridProvider
      cols={{
        s: 12,
        m: 12,
        l: 12,
        xl: 12,
      }}
      colGap={{
        s: '10px',
        m: '10px',
        l: '10px',
        xl: '10px',
      }}
      rowGap={{
        s: '10px',
        m: '10px',
        l: '10px',
        xl: '10px',
      }}
    >
      <Grid ref={gridRef}>
        <Cell
          cols={12}
          ref={cellRef}
        >
          Hello, world!
        </Cell>
      </Grid>
    </GridProvider>
  );
};

export default App;
