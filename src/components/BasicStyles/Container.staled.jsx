import styled from 'styled-components';

export const ContainerStyl = styled.div`
  min-width: 320px;
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center; */
`;
