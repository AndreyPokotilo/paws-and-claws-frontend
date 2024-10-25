import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { theme } from 'styles';

export const Hero = styled.section`
  margin-top: ${theme.spacing.step * 4 + 2}px;
`;

export const Box = styled.div`
  text-align: center;
  padding: 20%;
`;
export const HomeContainer = styled.div`

@media (max-width: 767px) {
  margin-left: auto;
  margin-right: auto;
  max-width: 430px;
  padding-top: ${theme.spacing.step * 6}px;
  padding-left: ${theme.spacing.step * 7}px;
  padding-right: ${theme.spacing.step * 7}px;
  }
`

export const BuyNowLink = styled(Link)`
  display: flex;
  width: ${props => props.theme.spacing.step * 45-1}px;
  background-color: ${props => props.theme.colors.orange};
  padding: ${props => props.theme.spacing.step * 2 - 2}px 0;
  border-radius: ${props => props.theme.spacing.step * 10}px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: ${theme.spacing.step * 6}px; */

  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeight.Medium};
  line-height: ${props => props.theme.lineHeight.xl};
  align-items: center;
  color: ${props => props.theme.colors.white};
  &:hover {
    background-color: ${props => props.theme.colors.green};
  }
  
  @media (min-width: ${theme.breakpoints.s}) {
    display: none;
  }
`;

export const Title = styled.h2`
  height: 32px;
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.Medium};
  line-height: 1;
  padding-left: 28px;
  margin-top: ${theme.spacing.step * 10}px;
  margin-bottom: ${theme.spacing.step * 10}px;
  @media (min-width: ${theme.breakpoints.s}) {
    margin-top: ${theme.spacing.step * 12}px;
    margin-bottom: ${theme.spacing.step * 12 + 3}px;
  }
`;
