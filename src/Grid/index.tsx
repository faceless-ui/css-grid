import React, {
  useContext,
  createContext,
  forwardRef,
} from 'react';
import { useCell } from '../Cell';
import { useSettings } from '../Settings';
import { IGrid, Props } from './types';

const Context = createContext<IGrid>({
  cols: {
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
  },
});

export const useGrid = (): IGrid => useContext(Context);

const Grid: React.FC<Props> = forwardRef<HTMLElement, Props>((props, ref) => {
  const {
    id,
    children,
    className,
    style,
    htmlAttributes = {},
    htmlElement = 'div',
  } = props;

  const containingCell = useCell();
  const settings = useSettings();

  const { classPrefix } = settings;

  const value: IGrid = {
    cols: {
      xl: containingCell?.cols.xl || settings.cols.xl,
      l: containingCell?.cols.l || settings.cols.l,
      m: containingCell?.cols.m || settings.cols.m,
      s: containingCell?.cols.s || settings.cols.s,
    },
  };

  const Tag = htmlElement as React.ElementType;

  return (
    <Context.Provider value={value}>
      <Tag
        ref={ref}
        id={id}
        className={[
          className,
          `${classPrefix}__grid`,
          `${classPrefix}__grid--xl-cols-${value.cols.xl}`,
          `${classPrefix}__grid--l-cols-${value.cols.l}`,
          `${classPrefix}__grid--m-cols-${value.cols.m}`,
          `${classPrefix}__grid--s-cols-${value.cols.s}`,
        ].filter(Boolean).join(' ')}
        style={style}
        {...htmlAttributes}
      >
        {children}
      </Tag>
    </Context.Provider>
  );
});

Grid.displayName = 'Grid';

export default Grid;
