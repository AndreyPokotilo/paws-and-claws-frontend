import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const HeaderStyled = styled.header`
  /* outline: 1px solid black; */
  position: relative;
  position: fixed;
  width: 100%;
  height: ${props => props.theme.spacing.step * 19}px;
  padding: ${props => props.theme.spacing.step * 1}px 0px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${theme.zIndexes.header};
  background-color: ${props => props.theme.colors.mainBackground};

  &.scroll {
    box-shadow: 0px 0px 4px 0px #b2ab73;
  }
`;

export const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props =>props.theme.breakpoints.xs}) and (max-width: 767px) {
    min-width: ${props => props.theme.breakpoints.xs};
    max-width: 430px;
  }
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: ${props => props.theme.breakpoints.xl};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${props => props.theme.spacing.step * 7}px;
  padding-right: ${props => props.theme.spacing.step * 7}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding-left: ${props => props.theme.spacing.step * 4}px;
  padding-right: ${props => props.theme.spacing.step * 4}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    padding-left: ${props => props.theme.spacing.step * 7}px;
  padding-right: ${props => props.theme.spacing.step * 7}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding-left: ${props => props.theme.spacing.step * 20 - 3}px;
    padding-right: ${props => props.theme.spacing.step * 21 - 1}px;
  }
`;

export const LogoLink = styled(Link)``;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ButtonMenu = styled.div`
  margin-right: 10px;
`;

export const ButtonSearch = styled.div`
  margin-right: 36px;
`;

export const NavLinksWrapper = styled.div`
  gap: ${props => props.theme.spacing.step * 5}px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.Regular};
  line-height: ${props => props.theme.lineHeight.l};
  /* transition-property: color, background-color, transform; */
  /* transform: scale(1);
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier}; */

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }

  &:active {
    color: ${props => props.theme.colors.green};
  }

  &.active {
    color: ${props => props.theme.colors.green};
    /* background-color: ${props => props.theme.colors.accent}; */
    /* padding: 6px 12px; */
    /* border-radius: 4px; */
    /* transform: scale(1); */
    pointer-events: none;
  }
`;
export const LogoWrapper = styled.div`
  margin-right: auto;
`;

export const LinkWrapper = styled.div`
  /* position: relative; */
  display: flex;
  gap: ${theme.spacing.step * 1}px;
  /* align-items: center; */
  /* justify-content: flex-end; */
  /* gap: ${props => props.theme.spacing.step * 5}px; */
  /* margin-left: ${props => props.theme.spacing.step * 7}px; */

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    position: relative;
    display: flex;
    gap: ${theme.spacing.step * 1}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    position: relative;
    display: flex;
    gap: ${theme.spacing.step * 3}px;
  }
`;

export const CountContainer = styled.div`
  position: relative;
`;

export const CountWrapper = styled.div`
  /* outline: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  right: 2px;
`;

export const Count = styled.span`
  font-size: ${props =>
    props.countDigits > 2 ? 8 : props.countDigits > 1 ? 10 : 12}px;
  /* font-size: 10px; */
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 12px */

  color: ${theme.colors.orange};
`;

export const ProfilBtn = styled.button`
  > svg {
    fill: ${props =>
      props.isLoggedIn ? theme.colors.orange : theme.colors.black};
  }
`;

export const LinkItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${props => props.theme.spacing.step * 5}px;

  margin-left: ${props => props.theme.spacing.step * 5 + 4}px;
`;

export const Leng = styled.div`
  width: ${props => props.theme.spacing.step * 17}px;
  gap: ${props => props.theme.spacing.step * 1}px;
  line-height: 1.25;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  /* text-transform: uppercase; */
`;

export const LengLinkStyled = styled(Link)`
  color: ${props => props.theme.colors.green};
  &.accent {
    color: ${props => props.theme.colors.orange};
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    /* align-items: center; */
    /* justify-content: space-evenly; */
  }
`;

export const SearchBox = styled.div`
  display: flex;

  position: relative;

  form {
    width: ${props => props.theme.spacing.step * 157}px;
    height: ${props => props.theme.spacing.step * 11}px;
  }

  input {
    width: 100%;
    height: 100%;
    outline: 0;

    border-radius: ${props => props.theme.spacing.step * 10}px;
    border: 1px solid ${props => props.theme.colors.green};
    padding: ${props => props.theme.spacing.step * 2 + 2}px
      ${props => props.theme.spacing.step * 4}px;
    padding-left: ${props => props.theme.spacing.step * 13}px;
    background-color: ${props => props.theme.colors.beige};

    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeight.Light};
    line-height: 1.25; /* 125% */
    color: ${props => props.theme.colors.green};

    /* border-radius: ${props => props.theme.spacing.step * 10}px;
    border: 1px solid ${props => props.theme.colors.green}; */

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeight.Light};
      line-height: 1.25; /* 125% */
      color: ${props => props.theme.colors.secGreen};
    }
  }

  .searchIcon {
    position: absolute;
    left: ${props => props.theme.spacing.step * 5}px;
    top: 50%;
    transform: translateY(-50%);

    .searchIcon:active {
      transform: scale(0.95);
    }
  }
`;
