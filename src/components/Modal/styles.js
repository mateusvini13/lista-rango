import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 484px;

  ${media.lessThan('medium')`
    width: 100%;
    height: fit-content;
  `}
`

export const Close = styled.div`
  position: absolute;
  top: -24px;
  right: -24px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  transition: 0.3s;
  transform: scale(1);
  background: #fff;
  border-radius: 50px;
  box-shadow: 0px 2px 4px #00000029;

  > svg {
    transition: 0.3s;
    transform: rotate(0deg);
  }

  :hover {
    transition: 0.3s;
    transform: scale(1.1);

    > svg {
      transition: 0.3s;
      transform: rotate(-180deg);
    }
  }

  ${media.lessThan('medium')`
    right: -12px;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 387px;
  border-bottom: solid 1px #E6E6E6;

  .img-container {
    width: 100%;
    height: 196px;
    padding: 0 24px 0 24px;
    margin-top: 22px;
    margin-bottom: 46px;

    img {
      width: 100%;
      height: 100%;

      object-fit: ${({ coverImage }) => coverImage ? 'cover' : 'contain'};
    }
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    padding: 0 24px 32px 24px;
    margin-top: 0;

    .text {
      display: flex;
      flex-direction: column;
      width: 380px;

      .title {
        font-size: 24px;
        line-height: 29px;
        font-weight: 500;

        margin-bottom: 4px;
      }

      .desc {
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
      }
    }

    .price {
      display: block;
      width: fit-content;

      color: #009CA3;
      font-size: 32px;
      line-height: 39px;
      font-weight: 500;
    }
  }

  ${media.lessThan('medium')`
    height: fit-content;

    .img-container {
      padding: 0 24px 0 24px;
      margin-top: 22px;
      margin-bottom: 32px;

      img {
        object-fit: 'contain';
      }
    }

    .info {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      padding-bottom: 24px;

      .text {
        width: 100%;

        .desc {
          font-size: 16px;
          line-height: 19px;
          font-weight: 500;
        }
      }

      .price {
        display: block;
        width: fit-content;

        margin-top: 12px;

        color: #009CA3;
        font-size: 24px;
        line-height: 29px;
        font-weight: 500;
      }
    }
  `}
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 96px;

  padding: 0 16px 0 16px;

  ${media.lessThan('medium')`
    height: fit-content;
    justify-content: center;
  `}
`

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 125px;
  height: 50px;

  padding: 0 16px 0 16px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  
  .btn,
  input {
    display: block;

    width: 30px;
    height: 42px;

    padding: 0;
    border: none;
    background: none;

    color: #009CA3;
    text-align: center;
    font-family: Montserrat, sans-serif;
  }

  input {
    font-size: 20px;
    line-height: 24px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;
    transform: scale(1);
    font-size: 32px;
    line-height: 36px;
    
    :hover {
      transition: 0.3s;
      transform: scale(1.2);
    }
  }

  ${media.lessThan('medium')`
    margin: 8px;
  `}
`

export const Add = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  width: 265px;
  
  padding: 0 14px 0 14px;

  transition: 0.3s;
  transform: scale(1);
  cursor: pointer;
  border-radius: 4px;
  background: #009CA3;

  p {
    display: block;

    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
  }

  :hover {
    transition: 0.3s;
    transform: scale(1.05);
  }

  ${media.lessThan('medium')`
    margin: 8px;
    width: fit-content;

    .price {
      display: none;
    }
  `}
`