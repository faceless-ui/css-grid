import styled from 'styled-components';

const StyledRow = styled.div`
  ${(props) => {
    const { numberOfColumns, gutterSize } = props.propsForStyler;

    const columnGap = gutterSize === 'columnWidth'
      ? `calc(100% * ( 1 / (${numberOfColumns} * 2)))`
      : gutterSize;

    return (`
      display: grid;
      grid-template-columns: repeat(${numberOfColumns}, 1fr);
      column-gap: ${columnGap};
    `);
  }}
`;

export default StyledRow;
