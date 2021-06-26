import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  flex-direction: ${({ column }) => column || 'row'};
  font-family: 'Roboto';
`;

export default Row;