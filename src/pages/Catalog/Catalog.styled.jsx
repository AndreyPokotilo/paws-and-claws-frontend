import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.spacing.step * 5}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    display: flex;
    flex-direction: row;
  }
`;

export const CategoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  gap: ${theme.spacing.step}px;
  @media (max-width: 767px) {
    max-width: 372px;
    margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
  scrollbar-width: none;
  /* position: relative; */
    }
 
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${theme.spacing.step * 76}px;
    flex-direction: column;
  }
`;

export const AsideCatalog = styled.aside`
  /* outline: 1px solid black; */
  display: block;
  flex-grow: 25%;
  width: 100%;
  @media (max-width: 767px) {
    position: relative;
  }
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${theme.spacing.step * 76}px;
  }
`;

export const PetButton = styled.button`
  position: relative;
  ${props => props.active && `z-index: ${theme.zIndexes.catalogPetButtons};`}
  padding: ${theme.spacing.step + 2}px ${theme.spacing.step * 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  
  & span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &.active {
    position: relative;
    z-index: ${theme.zIndexes.catalogPetButtons};
    background-color: ${theme.colors.beige};
  }

  &:hover {
    background-color: ${theme.colors.beige};
  }

  @media (max-width: 767px) {
    svg {
      display: none;
    }
  };

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding: ${theme.spacing.step + 2}px ${theme.spacing.step * 2}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    width: 304px;
    background-color: ${theme.colors.secGreen};

    border: 1px solid ${theme.colors.green};
    
    &:hover {
    background-color: ${theme.colors.beige};
  }

    &:active,
    &:active svg {
      color: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
    & svg.rodents {
      stroke: black;
    }

    &:active svg.rodents {
      color: ${theme.colors.green};
      fill: none;
      stroke: ${theme.colors.green};
    }
    svg {
      fill: black;
    }

    svg.rodents {
      fill: none;
    }

    & span {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &.active {
      position: relative;
      z-index: ${theme.zIndexes.catalogPetButtons};
      background-color: ${theme.colors.beige};
    }

    &:hover {
      background-color: ${theme.colors.beige};
    }

    &:active,
    &:active svg {
      color: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
    & svg.rodents {
      stroke: black;
    }

    &:active svg.rodents {
      color: ${theme.colors.green};
      fill: none;
      stroke: ${theme.colors.green};
    }
  }
`;

export const WrapperCatalog = styled.div`
  position: relative;
  width: 100%;

  ._categories-item {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 3}px;
  }

  ._variants {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 2}px;
  }
`;

export const BoxHiden = styled.div`
  display: none;
  position: absolute;
  z-index: ${theme.zIndexes.catalogPetButtons};
  background-color: ${theme.colors.beige};
  border: 1px solid ${theme.colors.green};

  width: ${theme.spacing.step * 76}px;
  /* width: 100%; */
  padding: ${theme.spacing.step * 5}px;

  &.active {
    display: block;
    @media (max-width: 767px) {
      /* width: 100%;
      max-width: 304px; */
      top: -20px;
      left: 50%;
      transform: translate(-50%);
  }}

  & > ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 3}px;
  };
`;

export const Category = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l}; /* 125% */

  &:hover {
    color: ${theme.colors.green};
  };

  &:active {
    color: ${theme.colors.orange};
  };
`;

export const FoodTypeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.step * 2}px;
`;

export const FoodType = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.l};

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  &:active {
    color: ${theme.colors.green};
    text-decoration: none;
  }
`;
