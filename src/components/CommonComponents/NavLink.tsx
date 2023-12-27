'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface NavLinkInterface {
  name: string;
  path: string;
}

function NavLink({ name, path }: NavLinkInterface) {
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsActive(pathName === path);
  }, [pathName]);

  return (
    <StyledNavLink href={path} activelink={isActive.toString()}>
      {name}
    </StyledNavLink>
  );
}

export default NavLink;

const lineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: calc(100% + 5px);
  }
`;

const StyledNavLink = styled(Link)<{ activelink: string }>`
  font-size: clamp(0.4em, 2vw, 0.9em);
  text-decoration: none;
  position: relative;
  width: max-content;

  &:hover:before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    bottom: -3px;
    left: 0;
    animation: ${lineAnimation} ease 0.3s forwards;
  }

  ${(props) =>
    props.activelink === 'true'
      ? `
      &:before {
        content: '';
        width: calc(100% + 5px);
        height: 2px;
        background-color: #000;
        position: absolute;
        bottom: -3px;
        left: 0;
      }
      `
      : ''}
`;
