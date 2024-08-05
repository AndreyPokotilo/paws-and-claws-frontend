import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
        

@media (min-width: ${props => props.theme.breakpoints.m}) {
  /*
  gap: ${props => props.theme.spacing.step * 5}px;  */
  flex-wrap: nowrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, 304px);
  grid-gap: 20px;
  }
  
`;

export const ListItem = styled.li``;
