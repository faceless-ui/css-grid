import React, { useContext, createContext } from 'react';
import { useCell } from '../Cell';
import { useSettings } from '../Settings';
import defaults from '../defaults';
import { IGrid, Props } from './types';

const Context = createContext<IGrid>({
  cols: defaults.cols,
  rows: defaults.rows,
});

export const useGrid = (): IGrid => useContext(Context);

const Grid: React.FC<Props> = (props) => {
  const {
    children,
    className,
    style,
    htmlElement = 'div',
  } = props;

  const containingCell = useCell();
  const settings = useSettings();

  const { rowGap } = settings;
  let { colGap } = settings;

  const columns = containingCell?.cols || settings.cols;

  if (colGap === 'columnWidth') {
    colGap = `calc(100% * ( 1 / (${columns} * 2)))`;
  }

  const value: IGrid = {
    cols: columns,
    rows: 1,
  };

  const Tag = htmlElement as React.ElementType;

  return (
    <Context.Provider value={value}>
      <Tag
        className={className}
        style={{
          ...style || {},
          display: 'grid',
          columnGap: colGap,
          rowGap,
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
      >
        {children}
      </Tag>
    </Context.Provider>
  );
};

export default Grid;
