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

  margin: auto;
  
  width: 90%;
  height: fit-content;
  max-width: 1216px;

  margin-top: 24px;
  padding-bottom: 24px;
`

export const RestaurantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 145px;
  margin-bottom: 24px;
  
  font-weight: 500;
`

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 145px;
  height: 145px;
  border-radius: 4px 0 0 4px;

  > img {
    width: 145px;
    height: 145px;

    object-fit: cover;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;

  margin-left: 20px;

  p {
    display: block;
    width: fit-content;
    max-width: 540px;

    line-height: 19px;
    font-size: 16px;
    font-weight: 400;

    &.name {
      line-height: 29px;
      font-weight: 500;
      font-size: 24px;
    }
  }

  .hours {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;

    > p {
      margin-top: 3px;

      line-height: 15px;
      font-size: 12px;
      font-weight: 400;

      > span {
        font-weight: 600;
      }
    }
  }
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
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;

  margin-bottom: 24px;
`

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  row-gap: 34px;

  width: 100%;
  height: fit-content;

  .item {
    display: flex;
    justify-content: center;
  }

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `}
`