import styled from '@emotion/styled';
// import { Link} from 'react-router-dom';
// import { theme } from 'styles';

export const MenuContainer = styled.div`
  position: relative;
  bottom: -10px;
  left: 0px;
  width: 100%;
  /* max-width: 430px;
min-width: 320px; */
  height: 700px;
  background-color: ${props => props.theme.colors.mainBackground};
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

// export const LogoLink = styled(Link)`
// `;


export const LanguageBurger = styled.div`
  color: ${props => props.theme.colors.black};
  line-height: 1.25;
  font-size: ${props => props.theme.fontSizes.s};
  overflow: hidden;
  max-height: ${props => (props.isOpenLanguage ? '140px' : '32px')};
  transition: max-height 0.5s ease;

  display: block;
  position: relative;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 0.5px solid ${props => props.theme.colors.grey};
  padding-left: 28px;
`;

export const ArrowWraper = styled.span`
      position: absolute;
    right: 25px;
    top: -4px;
    transform: ${({isOpenLanguage}) => isOpenLanguage ? 'rotate(180deg)' : 'rotate(0deg)'};
    svg{
      fill: black;
    }
    @media (min-width: ${props => props.theme.breakpoints.s}) {
   display: none;
  }
`
