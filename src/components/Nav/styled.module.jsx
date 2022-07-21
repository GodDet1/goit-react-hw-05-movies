import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  padding: 20px;
  background-color: ghostwhite;

  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  & a:first-of-type {
    margin-right: 40px;

    list-style: none;
  }
`;

export const NavigateLink = styled(NavLink)`
  display: inline-block;
  padding: 5px 10px;

  color: white;
  background-color: #ffee00;
  text-decoration: none;
  border-radius: 5px;

  background-color: white;
  background-image: linear-gradient(
    60deg,
    transparent,
    transparent 0%,
    #ffee00 30%,
    #0026ff 60%,
    transparent 100%
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;
  background-position-x: 50%;

  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transform: scale(1);
  transition: transform 0.5s;

  &.active {
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    color: white;
    transform: scale(1.3);
    transition: transform 0.5s;
    animation: btn 4s linear infinite;
  }

  @keyframes btn {
    0% {
      background-position-x: 50%;
    }
    25% {
      background-position-x: 100%;
    }
    75% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 50%;
    }
  }
`;
