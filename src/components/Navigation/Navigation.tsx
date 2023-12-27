'use client';

import React, { useEffect, useState } from 'react';
import FullScreenNavigation, { navButtons } from './fullscreen/FullScreen';
import { push as Menu } from 'react-burger-menu';
import NavLink from '../CommonComponents/NavLink';
import styled from 'styled-components';

function Navigation() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Menu
          isOpen={menuOpen}
          onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        >
          <nav>
            <GroupNavigationMobile>
              {navButtons.map(({ name, path }) => {
                return (
                  <li className='menu-item'>
                    <NavLink key={name} name={name} path={path} />
                  </li>
                );
              })}
            </GroupNavigationMobile>
          </nav>
        </Menu>
      ) : (
        <FullScreenNavigation />
      )}
    </>
  );
}

export default Navigation;

const GroupNavigationMobile = styled.ul`
  display: flex;
  flex-direction: column;
`;
