import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 62px;

  background: #009CA3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.29);
`;

export const GoBack = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80px;
  height: fit-content;

  transition: 0.3s;
  margin-left: 64px;

  :hover {
    transition: 0.3s;
    margin-left: 50px;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    height: fit-content;

    margin-left: 0;

    :hover {
      margin-left: 0;
    }
  `}
`
