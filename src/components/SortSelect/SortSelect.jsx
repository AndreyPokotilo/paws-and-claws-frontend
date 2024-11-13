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
import { theme } from 'styles';
// import { useSelector } from 'react-redux';
// import { setValueSort } from 'redux/slice/sortSelectSlice';
// import { selectSortingTypeStoreDefault } from 'redux/selectors/selectors';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSortingTypeStoreDefault } from 'redux/selectors/selectors';
// const initialState = 'знижки та акції';

export const SortSelect = () => {
  // const sortingType = useSelector(selectSortingTypeStore);
  const [isClickBurger, setIsClickBurger] = useState(false);
  const [indicator, setIndicator] = useState('');

  console.log("indicator:", indicator);

  const [searchParams, setSearchParams] = useSearchParams();
  const defaultSortSelect = useSelector(selectSortingTypeStoreDefault);
  // console.log("defaultSortSelect:", defaultSortSelect)
  
  const sortBy = searchParams.get('sortBy') || defaultSortSelect;
  // const query = searchParams.get('query');
 

  

  // const sortBy = searchParams.get('sortBy') || defaultSortSelect;

  // const defaultSortSelect = useSelector(selectSortingTypeStoreDefault);

  // const dispatch = useDispatch();

  const indicatorHandler = value => {
    console.log("value:", value)
    switch (value) {
      case 'cheap':
        setIndicator('спочатку дешеві');
        // dispatch(setValueSort(value));
        break;

      case 'expensive':
        setIndicator('спочатку дорогі');
        // dispatch(setValueSort(value));
        break;

      case 'rating':
        setIndicator('за рейтингом');
        // dispatch(setValueSort(value));
        break;

      case 'discounts':
        setIndicator('знижки та акції');
        // dispatch(setValueSort(value));
        break;

      default:
        setIndicator('знижки та акції');
      // dispatch(setValueSort('discounts'));
    }

    // Оновлення параметра 'sortBy' у URL
    setSearchParams(prevSearchParams => {
      const updatedSearchParams = new URLSearchParams(prevSearchParams);
      updatedSearchParams.set('sortBy', value);
      return updatedSearchParams;
    });

    setIsClickBurger(!isClickBurger);
  };



  useEffect(() => {
    // Викликати indicatorHandler при монтажі компонента на основі значення sortBy з URLSearchParams
    if (sortBy) {
      console.log("sortBy:", sortBy)

      indicatorHandler(sortBy);
      setIsClickBurger(true);
    } else {
      // В іншому випадку встановіть значення за замовчуванням (discounts або інше, якщо потрібно)
      indicatorHandler('discounts');
      setIsClickBurger(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  // useEffect(() => {
  //   // Викликати indicatorHandler при ініціалізації, якщо sortingType вже існує
  //   setIndicator(initialState);
  // }, [query]);

  const onButtonHandler = () => setIsClickBurger(!isClickBurger);
  const onBlurHandler = () => setIsClickBurger(true);

  // useEffect(() => {
  //   if (!sortBy) {
  //     if (defaultSortSelect === 'cheap') {
  //       setIndicator('спочатку дешеві');
  //     }
  //     if (defaultSortSelect === 'expensive') {
  //       setIndicator('спочатку дорогі');
  //     }
  //     if (defaultSortSelect === 'rating') {
  //       setIndicator('за рейтингом');
  //     }
  //     if (defaultSortSelect === 'discounts') {
  //       setIndicator('знижки та акції');
  //     }
  //   }
  // }, [defaultSortSelect, sortBy]); // setting default value for layout

  return (
    <BurgerContainer>
      <SortingSpan>Сортування:</SortingSpan>
      <DropDownContainer
        onBlur={onBlurHandler}
        onClick={onButtonHandler}
        tabIndex="0"
      >
        {isClickBurger ? (
          <DefaultWrapper>
            <DefaultValue
              style={{
                color:
                  indicator === 'обрати'
                    ? theme.colors.green
                    : theme.colors.black,
              }}
            >
              {indicator}
            </DefaultValue>
          </DefaultWrapper>
        ) : (
          <IndicatorWrapper isClickBurge={isClickBurger}>
            <IndicatorValue onClick={()=>{  console.log("onClick-cheap")
              indicatorHandler('cheap')}}>
              спочатку дешеві
            </IndicatorValue>
            <IndicatorValue onClick={()=>{console.log("onClick-expensive") 
              indicatorHandler('expensive')}}>
              спочатку дорогі
            </IndicatorValue>
            <IndicatorValue onClick={()=>{console.log("onClick-rating") 
              indicatorHandler('rating')}}>
              за рейтингом
            </IndicatorValue>
            <IndicatorValue onClick={()=>{console.log("onClick-discounts")  
              indicatorHandler('discounts')}}>
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
