import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;

  background: #E6E6E6;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 45px;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  height: 100%;
  padding: 0 23px 0 39px;

  background: #FFF;
  border-radius: 45px 0 0 45px;

  > p {
    font-size: 16px;
    font-weight: 500;
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`
export const Input = styled.input`
  position: relative;
  flex: 1;
  height: 100%;

  padding: 0 20px 0 20px;

  background: none;
  border: none;
  font-size: 16px;
  font-weight: 400;

  ::placeholder {
    opacity: 0;
  }

  ${media.lessThan('medium')`
    opacity: 1;
  `}
`
export const Icon = styled.img`
  display: block;

  height: 16px;
  width: 16px;

  margin-right: 19px;
`