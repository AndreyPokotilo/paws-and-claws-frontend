import styled from '@emotion/styled';
import { theme } from 'styles';

export const Hidden = styled.div`
  /* visibility: hidden; */
  display: none;
  width: 100vw;
  height: 300vh;
  background-color: black;
  opacity: 0.2;

  position: absolute;
  top: 0;

  /* z-index: 6; */
  z-index: ${theme.zIndexes.app};

  &.isHidden {
    /* visibility: visible; */
    display: block;
  }
`;

export const Section = styled.section`
  /* padding-top: ${props => props.theme.spacing.step * 5}px; */
  /* padding-bottom: ${props => props.theme.spacing.step * 5}px; */

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    /* padding-top: ${props => props.theme.spacing.step * 10}px; */
    /* padding-bottom: ${props => props.theme.spacing.step * 10}px; */
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    /* padding-top: ${props => props.theme.spacing.step * 20}px; */
    /* padding-bottom: ${props => props.theme.spacing.step * 20}px; */
  }
`;

export const Container = styled.div`
  /* outline: 1px solid red; */

 /* padding-left: ${props => props.theme.spacing.step * 7}px;
  padding-right: ${props => props.theme.spacing.step * 7}px; */

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.xs} ) and (max-width: 767px) {
    min-width: ${props => props.theme.breakpoints.xs};
   max-width: 430px;
  }

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    /* padding-left: ${props => props.theme.spacing.step * 10}px;
    padding-right: ${props => props.theme.spacing.step * 10}px; */
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    /* padding-left: ${props => props.theme.spacing.step * 15}px;
    padding-right: ${props => props.theme.spacing.step * 15}px; */
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding-left: ${props => props.theme.spacing.step * 20 + 2}px;
    padding-right: ${props => props.theme.spacing.step * 20 + 2}px;
    width: ${props => props.theme.breakpoints.l};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: ${props => props.theme.breakpoints.xl};
  }
`;

// export const Heading = styled.h2`
//   font-size: ${props => props.theme.fontSizes.medium};
//   font-weight: 600;
//   color: ${props => props.theme.colors.white};

//   text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
//   margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};

//   @media (min-width: ${props => props.theme.breakpoints.s}) {
//     font-size: ${props => props.theme.fontSizes.large};
//   }
//   @media (min-width: ${props => props.theme.breakpoints.m}) {
//     font-size: ${props => props.theme.fontSizes.xl};
//   }
//   @media (min-width: ${props => props.theme.breakpoints.l}) {
//     font-size: ${props => props.theme.fontSizes.xxl};
//   }
// `;

// export const Text = styled.p`
//   font-size: ${props => props.theme.fontSizes.small};
//   font-weight: 600;

//   text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
//   margin-bottom: ${props => props.theme.spacing.step * 5}px;

//   @media (min-width: ${props => props.theme.breakpoints.s}) {
//     font-size: ${props => props.theme.fontSizes.medium};

//     margin-bottom: ${props => props.theme.spacing.step * 7}px;
//   }
//   @media (min-width: ${props => props.theme.breakpoints.m}) {
//     font-size: ${props => props.theme.fontSizes.large};

//     margin-bottom: ${props => props.theme.spacing.step * 10}px;
//   }
//   @media (min-width: ${props => props.theme.breakpoints.l}) {
//     margin-bottom: ${props => props.theme.spacing.step * 20}px;
//   }
// `;

// export const Grid = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   grid-gap: ${props => props.theme.spacing.step * 5}px;
// `;

// export const GridItem = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: ${props => props.color};

//   border: 4px solid ${({ color }) => color ?? '#fff'};
//   border-radius: ${props => props.theme.spacing.step * 4}px;
//   transition: transform 0.5s ${props => props.theme.animations.cubicBezier};

//   overflow: hidden;
//   cursor: zoom-in;

//   &:hover,
//   &:focus {
//     transform: scale(1.05);
//     box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
//   }
// `;
