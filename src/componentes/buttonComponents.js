import styled from 'styled-components';
import {Link} from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#e00096' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  &:hover{
      transition: all .2d ease-in-out;
      background: ${({ primary }) => (primary ? '#fff' : '#e00096')}
  }
`;

export const Button2 = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#e00096' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  text-decoration: none;

  &:hover{
      transition: all .2d ease-in-out;
      background: ${({ primary }) => (primary ? '#fff' : '#e00096')}
  }
`;