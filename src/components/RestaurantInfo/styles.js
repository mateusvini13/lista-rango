import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 145px;
  margin-bottom: 26px;
  
  font-weight: 500;

  ${media.lessThan('medium')`
    flex-direction: column;
    height: fit-content;
  `}
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

  ${media.lessThan('medium')`
    margin-top: 12px;
    margin-left: 0;
    align-items: center; 

    .hours {
      align-items: center; 
    }
  `}
`
