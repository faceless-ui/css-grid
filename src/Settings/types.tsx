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

export type Breakpoints = {
  s: number,
  m: number,
  l: number,
}

export interface Settings {
  cols: Columns,
  colGap: Gaps,
  rowGap: Gaps,
  smallestBreakpointReached?: 'xl' | 'l' | 'm' | 's',
  breakpoints?: Breakpoints,
  classPrefix?: string
}

export interface Props {
  cols?: Columns,
  colGap?: Gaps,
  rowGap?: Gaps,
  classPrefix?: string,
  breakpoints?: Breakpoints
  children: React.ReactNode
}
