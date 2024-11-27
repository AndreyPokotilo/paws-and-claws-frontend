import styled from '@emotion/styled';
// import { theme } from 'styles';

export const UserMenuContainer = styled.div`
  position: absolute;
  height: 430px;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 767px) {
    top: 108px;
  left: 50%;
  transform: translate(-50%);
  max-width: 458px;
  };
  @media (min-width: 768px) {
    top: 80px;
  right: 0px;
  width: 458px;
  height: 481px;
  };
`;
