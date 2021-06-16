import styled from 'styled-components';

const Separator = styled.div`
  height: ${({ y }) => y || 10}${({ px }) => px || '%'};
  width:  ${({ x }) => x || 10}${({ px }) => px || '%'};
`;

export default Separator;