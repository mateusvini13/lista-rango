import styled, { css } from 'styled-components';
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

  margin: auto;
  
  width: 90%;
  height: fit-content;
  max-width: 1216px;

  margin-top: 36px;
  padding-bottom: 24px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  justify-content: space-between;

  .left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 70%;
    max-width: 800px;
    height: fit-content;
  }

  .right {
    position: relative;
    width: 23%;
    height: 765px;

    background: #E6E6E6;
  }

  ${media.lessThan('medium')`
    .left {
      width: 100%;
    }

    .right {
      display: none;
    }
  `}
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;

  margin-bottom: 24px;
`