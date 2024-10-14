import styled from '@emotion/styled';

export const List = styled.ul`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 304px);
  grid-gap: 20px;
  @media screen and (min-width: 430px) and (max-width: 767px) {
  /* padding-top: 34px;
  padding-bottom: 33px; */
  width: 374px;
  padding: 34px 34px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${props=> props.theme.colors.orange}
  }
`;

export const ListItem = styled.li``;
