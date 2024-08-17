import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const FooterStyled = styled.footer`
  background-color: ${props => props.theme.colors.green};
  margin-top: ${props => props.theme.spacing.step * 8}px;
`;

export const FooterBox = styled.div`
  width: 250px;
  padding-top: 25px;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 40px;
    width: 280px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: 304px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: ${props => props.theme.spacing.step * 5}px;
  padding: 0 ${props => props.theme.spacing.step * 7}px
    ${props => props.theme.spacing.step * 25}px
    ${props => props.theme.spacing.step * 7}px;  

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 ${props => props.theme.spacing.step * 10}px
    ${props => props.theme.spacing.step * 33}px
    ${props => props.theme.spacing.step * 10}px;
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    flex-wrap: nowrap;
    padding: 0 ${props => props.theme.spacing.step * 20 + 2}px
    ${props => props.theme.spacing.step * 53}px
    ${props => props.theme.spacing.step * 20 + 2}px;
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: ${props => props.theme.breakpoints.xl};
  }
`;
export const FooterLinkStyled = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.s};

  line-height: ${props => props.theme.lineHeight.l};
  /* transition-property: color, background-color, transform; */

  /* transform: scale(1);
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier}; */

  &:hover {
    /* color: ${props => props.theme.colors.green}; */
    text-decoration: underline;
  }

  &:active {
    color: ${props => props.theme.colors.secGreen};
    text-decoration: none;
  }

  &.active {
    color: ${props => props.theme.colors.white};
    /* background-color: ${props => props.theme.colors.accent}; */

    /* padding: 6px 12px; */
    /* border-radius: 4px; */

    /* transform: scale(1); */
    pointer-events: none;
  }
`;

export const FooterH2Styled = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeight.Medium};
  line-height: ${props => props.theme.lineHeight.l};
`;

export const FooterAStyled = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeight.Medium};
  line-height: ${props => props.theme.lineHeight.l};
  /* transition-property: color, background-color, transform; */

  /* transform: scale(1);
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier}; */

  &:hover
  /* ,  &:focus  */ {
    /* color: ${props => props.theme.colors.green}; */
    text-decoration: underline;
  }

  &:active {
    color: ${props => props.theme.colors.secGreen};
    text-decoration: none;
  }

  &.active {
    color: ${props => props.theme.colors.white};
    /* background-color: ${props => props.theme.colors.accent}; */

    /* padding: 6px 12px; */
    /* border-radius: 4px; */

    /* transform: scale(1); */
    pointer-events: none;
  }
`;

export const SocialListStyled = styled.ul`
  margin-top: ${props => props.theme.spacing.step * 5}px;
  display: flex;

  gap: ${props => props.theme.spacing.step * 10}px;
`;

export const SocialLinkStyled = styled.a`
  display: block;
  ${'' /* padding: 8px; */}
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.step * 2}px;
  margin-top: ${props => props.theme.spacing.step * 5}px;
`;

// export const UsersList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: ${props => props.theme.spacing.step * 2}px;
//   margin-top: ${props => props.theme.spacing.step * 5}px;
// `;

// export const ContactsList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: ${props => props.theme.spacing.step * 3}px;
//   margin-top: ${props => props.theme.spacing.step * 6}px;
// `;
