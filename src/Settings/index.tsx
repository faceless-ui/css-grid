import React, { createContext, useContext } from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import { Settings, Props } from './types';

const Context = createContext({
  colGap: '10px',
  rowGap: '10px',
  cols: 12,
});

export const useSettings = (): Settings => useContext(Context);

const SettingsProvider: React.FC<Props> = (props) => {
  const {
    children,
    cols,
    colGap,
    rowGap,
  } = props;

  const { breakpoints } = useWindowInfo();

  let smallestBreakpointReached: 'xl' | 'l' | 'm' | 's' = 'xl';
  if (breakpoints?.l) smallestBreakpointReached = 'l';
  if (breakpoints?.m) smallestBreakpointReached = 'm';
  if (breakpoints?.s) smallestBreakpointReached = 's';

  const maxColumns = cols[smallestBreakpointReached];
  const activeColumnGap = colGap[smallestBreakpointReached];
  const activeRowGap = rowGap[smallestBreakpointReached];

  const value: Settings = {
    cols: maxColumns,
    rowGap: activeRowGap,
    colGap: activeColumnGap,
    smallestBreakpointReached,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default SettingsProvider;
