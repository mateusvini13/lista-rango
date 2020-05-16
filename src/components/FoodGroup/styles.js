import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
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

  ${media.lessThan('medium')`
    width: 95%;
  `}
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