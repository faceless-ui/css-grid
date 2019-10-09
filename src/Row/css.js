import styled from 'styled-components';

const StyledRow = styled.div`
  ${(props) => {
    const {
      numberOfColumns,
      columnGap,
      rowGap,
    } = props.propsForStyler;

    const gutter = columnGap === 'columnWidth'
      ? `calc(100% * ( 1 / (${numberOfColumns} * 2)))`
      : columnGap;

    return (`
      display: grid;
      grid-template-columns: repeat(${numberOfColumns}, 1fr);
      column-gap: ${gutter};
      ${rowGap ? `row-gap: ${rowGap}` : null};
    `);
  }}
`;

export default StyledRow;
