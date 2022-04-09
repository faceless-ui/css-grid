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
    <div>
      <pre>
        <code>
          Cols:
          <br />
          s: 8
          <br />
          m: 8
          <br />
          l: columnWidth
          <br />
          xl: columnWidth
        </code>
      </pre>
      <GridProvider
        cols={{
          s: 8,
          m: 8,
          l: 12,
          xl: 12,
        }}
        colGap={{
          s: '10px',
          m: '10px',
          l: 'columnWidth',
          xl: 'columnWidth',
        }}
        rowGap={{
          s: '10px',
          m: '10px',
          l: '10px',
          xl: '10px',
        }}
      >
        <Grid
          ref={gridRef}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            padding: '50px 0',
          }}
        >
          <Cell
            cols={12}
            ref={cellRef}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              padding: '50px 0',
            }}
          >
            12 Column Cell
          </Cell>
          <Cell
            cols={10}
            start={2}
            ref={cellRef}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              padding: '50px 0',
            }}
          >
            10 Column Cell, Pushed 2 Columns, With A Nested Grid
            <Grid
              ref={gridRef}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                padding: '50px 0',
              }}
            >
              <Cell
                cols={8}
                start={2}
                ref={cellRef}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  padding: '50px 0',
                }}
              >
                Nested 8 Column Cell, Pushed 2 Columns
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </GridProvider>
    </div>
  );
};

export default App;
