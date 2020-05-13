import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;
  display: flex;

  width: 367px;
  height: 100px;

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

    height: 15px;
    margin-bottom: 2px;

    font-size: 12px;
    font-weight: 400;

    &.title {
      height: 19px;
      
      font-size: 16px;
      font-weight: 500;
    }
  }

  ${media.lessThan('medium')`
    padding-left: 10px;
  `}
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
    font-weight: bold;
  }
`