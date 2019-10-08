import styled from 'styled-components';

const StyledColumn = styled.div`
  ${(props) => {
    const { span, startOn } = props.propsForStyler;
    return (`
      grid-column-start: ${startOn || `span ${span}`};
      grid-column-end: ${startOn ? `span ${span}` : 'auto'};
    `);
  }}
`;

export default StyledColumn;
