import styled from '@emotion/styled';
import { theme } from 'styles';

export const SearchBox = styled.div`
  display: flex;

  position: relative;
 
  @media (min-width: ${props =>props.theme.breakpoints.xs}) and (max-width: 767px) {
    padding-right: 28px;
    border-bottom: 1px solid ${theme.colors.green};

    svg{
      fill: black;
    }
  };
  
  form {
    width: 100%;
    @media (min-width: ${props =>props.theme.breakpoints.xs}) and (max-width: 767px) {
      
     /* min-width: ${theme.spacing.step * 80}px;
     max-width: ${theme.spacing.step * 107 + 2}px; */
     height: ${theme.spacing.step * 18}px;
    };

    @media (min-width: ${props => props.theme.breakpoints.s}) {
      width: ${theme.spacing.step * 80}px;
      height: ${theme.spacing.step * 11}px;
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
      width: ${theme.spacing.step * 100}px;
      height: ${theme.spacing.step * 11}px;
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
      width: ${theme.spacing.step * 157}px;
      height: ${theme.spacing.step * 11}px;
    }
  }

  input {
    width: 100%;
    height: 100%;
    outline: 0;

    /* border-radius: ${theme.spacing.step * 10}px; */
    border: none;
    padding: ${theme.spacing.step * 2 + 2}px ${theme.spacing.step * 12}px;
    padding-left: ${theme.spacing.step * 18}px;
    background-color: ${theme.colors.beige};

    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Light};
    line-height: 1.25; /* 125% */
    color: ${theme.colors.black};

    

    &::placeholder {
      font-size: ${theme.fontSizes.s};
      font-weight: ${theme.fontWeight.Light};
      line-height: 1.25; /* 125% */
      color: ${theme.colors.green};
    }
    
    
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      width: 100%;
      height: 100%;
      outline: 0;
      border-radius: ${theme.spacing.step * 10}px;
      border: 1px solid ${theme.colors.green};
      padding: ${theme.spacing.step * 2 + 2}px ${theme.spacing.step * 4 + 15}px;
      padding-left: ${theme.spacing.step * 13}px;
      
    }
  };

  .searchIcon {
    position: absolute;
    left: ${theme.spacing.step * 7}px;
    top: 50%;
    transform: translateY(-50%);

    .searchIcon:active {
      transform: scale(0.95);
    }
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      left: ${theme.spacing.step * 5}px;
    }
  }
  .resetButton {
    display: ${props => (props.resetBoolean ? 'block' : 'none')};
    position: absolute;
    right: 72px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${theme.colors.beige};
    width: 22px;
    height: 22px;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      right: ${theme.spacing.step * 4+1}px;
    }
  }
  .resetButtonSVG {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    input:focus {
      display: block;
    }
  }
`;
