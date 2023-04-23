import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;

  text-transform: capitalize;

  :hover,
  :focus {
    transform: scale(1.025);
    background-color: #5a79c1;
  }
  &:active {
    scale: 0.95;
    background-color: #f12828a9;
    outline: 7px solid #f12828a9;
    outline-offset: 10px;
  }
`;
