import styled from 'styled-components';

const StyledColumn = styled.div`
  ${(props) => {
    const { span, startOnHoriz, startOnVert } = props.propsForStyler;
    return (`
      grid-column-start: ${startOnHoriz || `span ${span}`};
      grid-column-end: ${startOnHoriz ? `span ${span}` : 'auto'};
      ${startOnVert ? `grid-row-start: ${startOnVert};` : ''}
    `);
  }}
`;

export default StyledColumn;
