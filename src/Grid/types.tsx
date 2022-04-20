import { CSSProperties, ElementType } from 'react';
import { Columns } from '../Settings/types';

export interface IGrid {
  cols: Columns
}

export interface Props {
  id?: string
  className?: string
  style?: CSSProperties
  htmlElement?: ElementType
  htmlAttributes?: {
    [key: string]: unknown
  },
  ref?: React.Ref<HTMLElement>
  children: React.ReactNode
}
