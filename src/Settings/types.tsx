export interface Settings {
  colGap: string,
  rowGap: string,
  cols: number,
  smallestBreakpointReached?: 'xl' | 'l' | 'm' | 's',
}

export interface Columns {
  s: number,
  m: number,
  l: number,
  xl: number,
}

export interface Gaps {
  s: string,
  m: string,
  l: string,
  xl: string,
}

export interface Props {
  children: React.ReactNode,
  cols: Columns,
  colGap: Gaps,
  rowGap: Gaps,
}
