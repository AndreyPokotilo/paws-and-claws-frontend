// this component is used for sorting on product pages
import React, { useEffect, useState } from 'react';

import {
  BurgerContainer,
  SortingSpan,
  DropDownContainer,
  DefaultWrapper,
  DefaultValue,
  IndicatorWrapper,
  IndicatorValue,
  BurgerBtn,
} from './SortSelect.styled';
import { RightArrow } from 'components/Icons';
import { useSearchParams } from 'react-router-dom';
import { selectSortingTypeStoreDefault } from 'redux/selectors/selectors';
import { useSelector } from 'react-redux';

export const SortSelect = () => {
  const [isClickBurger, setIsClickBurger] = useState(false);
  const [indicator, setIndicator] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultSortSelect = useSelector(selectSortingTypeStoreDefault);
  
  // const sortBy = searchParams.get('sortBy') ;
  const sortBy = searchParams.get('sortBy') || defaultSortSelect;

  const indicatorHandler = value => {
    console.log("value:", value)
    switch (value) {
      case 'cheap':
        setIndicator('спочатку дешеві');
        break;

      case 'expensive':
        setIndicator('спочатку дорогі');
        break;

      case 'rating':
        setIndicator('за рейтингом');
        break;

      case 'discounts':
        setIndicator('знижки та акції');
        break;

      default:
        setIndicator('знижки та акції');
    }

    // Оновлення параметра 'sortBy' у URL
    setSearchParams(() => {
      const updatedSearchParams = new URLSearchParams(sortBy);
      updatedSearchParams.set('sortBy', `${value}`);
      return updatedSearchParams;
    });

    setIsClickBurger(true);
  };



  useEffect(() => {
    // Викликати indicatorHandler при монтажі компонента на основі значення sortBy з URLSearchParams
    if(sortBy) {
      indicatorHandler(sortBy);
      setIsClickBurger(true);
    }
      
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);


  const onButtonHandler = () => setIsClickBurger(!isClickBurger);
  const onBlurHandler = () => setIsClickBurger(true);


  return (
    <BurgerContainer>
      <SortingSpan>Сортування:</SortingSpan>
      <DropDownContainer
        onBlur={onBlurHandler}
        onClick={onButtonHandler}
        // tabIndex="0"
      >
        {isClickBurger ? (
          <DefaultWrapper>
            <DefaultValue
            >
              {indicator}
            </DefaultValue>
          </DefaultWrapper>
        ) : (
          <IndicatorWrapper isClickBurge={isClickBurger}>
            <IndicatorValue onClick={()=>indicatorHandler('cheap')}>
              спочатку дешеві
            </IndicatorValue>
            <IndicatorValue onClick={()=>indicatorHandler('expensive')}>
              спочатку дорогі
            </IndicatorValue>
            <IndicatorValue onClick={()=>indicatorHandler('rating')}>
              за рейтингом
            </IndicatorValue>
            <IndicatorValue onClick={()=>indicatorHandler('discounts')}>
              знижки та акції
            </IndicatorValue>
          </IndicatorWrapper>
        )}

        <BurgerBtn
          style={{
            transform: isClickBurger ? 'rotate(90deg)' : 'rotate(-90deg)',
          }}
        >
          <RightArrow />
        </BurgerBtn>
      </DropDownContainer>
    </BurgerContainer>
  );
};
