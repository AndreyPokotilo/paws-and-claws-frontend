import styled from '@emotion/styled';
// import Select from 'react-select';
import { theme } from 'styles';

export const BurgerContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  align-items: flex-start;
  /* cursor: pointer; */
  @media (max-width: 767px) {
    position: relative;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 430px;
    border-top: 1px solid ${theme.colors.secGreen} ;
    border-bottom: 1px solid ${theme.colors.secGreen} ;
  };
  @media (min-width: ${theme.breakpoints.s}) {
    right: 70px;
  }
  @media (min-width: ${theme.breakpoints.m}) {
    right: 36px;
  }
`;

export const SortingSpan = styled.span`
  margin-top: 9px;
  margin-right: 10px;
  color: ${theme.colors.green};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;
  /* banner content */
  font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media (max-width: 767px) {
  margin-top: 0px;
  margin-right: 10px;
    
  };
`;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${theme.colors.secGreen};
  width: 196px;
  background-color: ${theme.colors.mainBackground};
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 3px;
  padding-bottom: 3px;
  z-index: ${theme.zIndexes.sortSelect};
  cursor: pointer;
`;

export const DefaultWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const DefaultValue = styled.p`
  font-size: 14px;
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.s};
  cursor: inherit;
`;

export const IndicatorWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 4px;
  padding-bottom: 4px;
  /* gap: 8px; */
  width: 100%;
`;

export const IndicatorValue = styled.li`
  display: inline-block;
  width: 100%;

  padding: 4px 0 4px 0;
  color: ${theme.colors.black};
  font-size: 14px;
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.s};
  cursor: inherit;
  &:hover {
    color: ${theme.colors.green};
  };
`;
export const BurgerBtn = styled.button`
  margin-bottom: auto;
  &:hover {
    fill: ${theme.colors.green};
  };
`;
