import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;
  display: flex;

  width: 367px;
  height: 100px;

  cursor: pointer;
  transition: 0.3s;
  transform: scale(1);
  border-radius: 4px;
  box-shadow: 0px 2px 4px #00000029;

  ${media.lessThan('medium')`
    width: 325px;
  `}

  :hover {
    transition: 0.3s;
    transform: scale(1.05);
  }

  :active {
    transition: 0.3s;
    transform: scale(0.95);
  }

  ${({ menu }) => menu && css`
    width: 385px;
    height: 115px;

    border-radius: 0;
    
    ${Image} {
      width: 115px;
      height: 115px;

      border-radius: 0;

      > img {
        width: 115px;
        height: 115px;

        border-radius: 0;
      }
    }

    ${Content} {
      > p {
        font-weight: 500;
        margin-bottom: 8px;
      }
    }
  `}

`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;
  border-radius: 4px 0 0 4px;

  > img {
    width: 100px;
    height: 100px;

    object-fit: cover;
    border-radius: 4px 0 0 4px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1;
  height: 100%;

  padding: 0 25px 0 25px;

  > p {
    display: block;

    min-height: 15px;
    margin-bottom: 2px;

    font-size: 12px;
    font-weight: 400;

    &.title {
      min-height: 19px;
      
      font-size: 16px;
      font-weight: 500;
    }
  }

  ${media.lessThan('medium')`
    padding-left: 10px;
  `}
`

export const Prices = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  p {
    display: block;
    height: 19px;

    font-size: 16px;
    color: #009CA3;

    &.original {
      height: 15px;

      margin-left: 4px;
      padding: 0 3px 0 3px;

      color: #989898;
      font-size: 12px;
      text-decoration: line-through;
    }
  }
`

export const Open = styled.div`
  position: absolute;
  top: -16px;
  right: -16px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  border-radius: 50px;
  background-color: ${({ open }) => open ? "#2B0D61" : "#B5ABD4"};

  > p {
    display: block;

    text-align: center;
    color: #fff;
    font-size: 8px;
    font-weight: 600;
  }
`
export const Sale = styled.div`
  position: absolute;
  top: -12px;
  right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 21px;

  border-radius: 11px;
  background-color: #2B0D61;

  > p {
    display: block;
    padding: 0 12px 0 4px;

    text-align: center;
    color: #fff;
    font-size: 8px;
    font-weight: 600;
  }
`

export const Badge = styled.img`
  display: block;
  height: 12px;
  width: 9px;

  margin-left: 12px;
`