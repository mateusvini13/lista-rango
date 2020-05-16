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

export const RestaurantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 145px;
  margin-bottom: 26px;
  
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

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  ${({ closed }) => closed && css`
    ${MenuContainer} {
      transition: 0.3s;
      height: 0;
      margin-bottom: 0;
      overflow: hidden;
    }
  `}
`

export const GroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%; 
  height: 42px;

  margin-left: 10px;

  transition: 0.3s;
  transform: scale(1);
  cursor: pointer;
  border-bottom: solid 1px #404040;

  :hover {
    transition: 0.3s;
    margin-left: 20px;

    img {
      transition: 0.3s;
      transform: rotateZ(-90deg);
    }
  }

  p {
    display: block;

    height: 19px;
    width: fit-content;
    margin-left: 10px;
    text-transform: capitalize;

    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
  }

  img {
    display: block;

    height: 16px;
    width: 16px;
    
    transition: 0.3s;
    transform: rotateZ(0deg);
    margin-right: 32px;
  }
`

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  row-gap: 34px;

  margin-top: 24px;
  margin-bottom: 36px;

  transition: 0.3s;
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

export const ModalContent = styled.div`
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