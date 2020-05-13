import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;

export const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: fit-content;

  margin-top: 32px;
`

export const Title = styled.p`
  display: block;

  margin-bottom: 32px;
  
  font-size: 24px;
  font-weight: 500;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;

  margin-bottom:46px;
`

export const Restaurants = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 34px;

  width: 90%;
  max-width: 1216px;
  height: fit-content;

  ${media.lessThan('large')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`