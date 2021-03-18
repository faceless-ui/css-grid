import React from 'react';

export interface IGrid {
  cols: number,
  rows: number,
}

export interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties,
  htmlElement?: React.ElementType
}
