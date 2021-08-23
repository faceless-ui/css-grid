import React from 'react';
import { Columns } from '../Settings/types';

export interface ICell {
  cols: Columns
}
export interface Props {
  children?: React.ReactNode
  cols?: number
  colsS?: number
  colsM?: number
  colsL?: number
  colsXL?: number
  rows?: number
  start?: number
  startS?: number
  startM?: number
  startL?: number
  startXL?: number
  className?: string
  style?: React.CSSProperties
}
