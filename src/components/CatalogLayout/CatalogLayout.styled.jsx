import styled from '@emotion/styled';

export const TitelContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const Sorter = styled.div`
position: relative;
margin-top: auto;
margin-bottom: 20px;
width: 100%;
height: 40px;
@media (min-width: ${props => props.theme.breakpoints.s}) {
    width: 304px;
  };

` 