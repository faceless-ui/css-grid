import React from 'react';

export interface ICell {
  cols?: number
  colsS?: number
  colsM?: number
  colsL?: number
  colsXL?: number
  start?: number
  startS?: number
  startM?: number
  startL?: number
  startXL?: number
  rows?: number
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
  style?: React.CSSProperties,
  htmlElement?: React.ElementType
}
