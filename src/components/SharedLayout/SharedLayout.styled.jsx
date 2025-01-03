import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const SharedLayoutBox = styled.div`
  /* display: flex;
flex-direction: column;
justify-content: center; */
  /* margin: 0 auto; */
  /* position: relative; */
`;

export const BoxMT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.xs}) and (max-width: 767px) {
    margin-top: ${theme.spacing.step * 15 - 2}px;
  }
  @media (min-width: ${theme.breakpoints.s}) {
    margin-top: ${theme.spacing.step * 20 - 2}px;
  }
`;

export const NavStyle = styled.nav`

  @media (min-width: ${theme.breakpoints.xs}) and (max-width: 767px) {
    padding-top: 72px;
  };

  @media (min-width: ${theme.breakpoints.s}) {
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.step * 6}px;
  };
`;

export const Main = styled.div``;

export const Link = styled(NavLink)`
  color: ${theme.colors.black};
  /* font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 125% */
  /* line-height: ${theme.lineHeight.m}; */
  line-height: 1.25;
  font-size: ${theme.fontSizes.s};

  &:hover,
  &:focus {
    color: ${theme.colors.green};
  }

  &.active {
    color: ${theme.colors.orange};
  }
  @media (min-width: ${theme.breakpoints.xs}) and (max-width: 767px) {
    display: block;
    font-size: 20px;
    line-height: 24px; 
    padding-bottom: 8px;
    margin-bottom:8px;
    border-bottom: 0.5px solid ${theme.colors.grey};
    padding-left: 28px;
  }
`;

// export const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
//   padding: 8px 0;
//   margin-bottom: 16px;
//   border-bottom: 1px solid black;

//   > nav {
//     display: flex;
//   }
// `;

// export const Logo = styled.p`
//   font-weight: 700;
//   margin: 0;
// `;

// export const Footer = styled.footer`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
//   padding: 8px 0;
//   border-top: 1px solid black;

//   height: 30px;
//   flex-grow: 0;
//   flex-shrink: 0;

//   & > nav {
//     display: flex;
//   }
// `;
