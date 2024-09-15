import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';
import { theme } from 'styles';

export const CarouselStyle = styled(Carousel)`
  .carousel {
    overflow: hidden;
    width: 100%;
    height: 660px;
    display: flex;

    flex-direction: column;
    justify-content: center;
    /* z-index: 5; */
    z-index: ${theme.zIndexes.carousel};
  }

  img {
    @media (min-width: ${props =>props.theme.breakpoints.xs}) and (max-width: 767px) {
      min-height: 509px;
      max-height: 610px;
    }
  }
  .carousel-indicators {
    gap: 16px;
    margin-bottom: 0;
    bottom: ${props => props.theme.spacing.step * 5}px;
    /* transform: translateY(100%); */
  }

  .carousel-control-prev {
    justify-content: flex-start;
    padding-left: 16px;
  }

  .carousel-control-next {
    justify-content: flex-end;
    padding-right: 16px;
    /* display: none; */
  }

  .carousel-indicators [data-bs-target] {
    margin: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 0;

    background-color: #f3ecdc;
  }

  .carousel-indicators .active {
    background-color: #e68314;
  }

  .carousel-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    
    @media (min-width: ${props =>props.theme.breakpoints.xs}) and (max-width: 767px) {
    width: 100%;
    padding-bottom: ${props => props.theme.spacing.step * 17}px;
    padding-left: ${props => props.theme.spacing.step * 7}px;
    padding-right: ${props => props.theme.spacing.step * 7}px;
    
    }

    @media (min-width: ${theme.breakpoints.s}) {
      gap: 20px;
      width: 100%;
    padding-bottom: ${props => props.theme.spacing.step * 17}px;
    padding-left: ${props => props.theme.spacing.step * 15}px;
    padding-right: ${props => props.theme.spacing.step * 15}px;

    }
    @media (min-width: ${theme.breakpoints.m}) {
      gap: 24px;
      width: ${props => props.theme.spacing.step * 184}px;
    padding-bottom: ${props => props.theme.spacing.step * 28}px;
    padding-left: ${props => props.theme.spacing.step * 27}px;
    }
  }

  .captionDescription {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.step * 5}px;
    justify-content: start;
    text-align: start;

    @media (min-width: ${theme.breakpoints.xs}) and (max-width: 767px) {
      max-width: 374px;
    };

    @media (min-width: ${theme.breakpoints.s}) {
    };
  }

  .title {
    font-size: ${props => props.theme.fontSizes.l};
    font-weight: ${props => props.theme.fontWeight.Medium};
    line-height: ${props => props.theme.lineHeight.xl};
    @media (min-width: 430px) and (max-width: 767px) {
      font-size: ${props => props.theme.fontSizes.xl};
      font-weight: ${props => props.theme.fontWeight.Medium};
      line-height: ${props => props.theme.lineHeight.xl};
    }
    @media (min-width: ${theme.breakpoints.s}) {
      font-size: 42px;
      font-weight: ${props => props.theme.fontWeight.SemiBold};
      line-height: 48px;

    }
    @media (min-width: ${theme.breakpoints.m}) {
      font-size: ${props => props.theme.fontSizes.xxxl};
      font-weight: ${props => props.theme.fontWeight.SemiBold};
      line-height: ${props => props.theme.lineHeight.xxxl};
    }
  }


  .discription {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: start;
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeight.Light};
    line-height: ${props => props.theme.lineHeight.s};

    @media (min-width: 430px) and (max-width: 767px) {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeight.Light};
      line-height: ${props => props.theme.lineHeight.l};
    }
    @media (min-width: ${theme.breakpoints.s}) {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeight.Regular};
      line-height: ${props => props.theme.lineHeight.l};

    }
    /* @media (min-width: ${theme.breakpoints.m}) {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeight.Regular};
      line-height: ${props => props.theme.lineHeight.l};
    } */
  }

  .bannerLink {
    display: block;
    width: ${props => props.theme.spacing.step * 76}px;
    background-color: ${props => props.theme.colors.orange};
    padding: ${props => props.theme.spacing.step * 4}px 0;
    border-radius: ${props => props.theme.spacing.step * 10}px;

    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeight.Medium};
    line-height: ${props => props.theme.lineHeight.xl};
    align-items: center;

    &:hover {
      background-color: ${props => props.theme.colors.green};
    }
  }
`;
