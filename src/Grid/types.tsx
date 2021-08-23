import React from 'react';
import { Columns } from '../Settings/types';

export interface IGrid {
  cols?: Columns,
}
export interface Props {
  className?: string
  style?: React.CSSProperties
}
