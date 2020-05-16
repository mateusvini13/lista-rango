import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 484px;

  .close {
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
  }

  .content {
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
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 96px;

    padding: 0 16px 0 16px;

    .controls {
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
    }

    .add {
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
    }
  }
`