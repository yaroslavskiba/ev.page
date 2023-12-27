'use client';

import FootNote from '@/components/CommonComponents/FootNote';
import styled from 'styled-components';
import NavLink from '@/components/CommonComponents/NavLink';
import { LogoTitle } from '@/components/components.styled/styled';

export const navButtons = [
  { name: 'Главная', path: '/' },
  { name: 'Новости и события', path: '/news' },
  { name: 'Галерея', path: '/gallery' },
  { name: 'Обо мне', path: '/about' },
  { name: 'Контакты', path: '/contact' },
];

function FullScreenNavigation() {
  return (
    <NavigationContainer>
      <GroupHeader>
        <LogoTitle href='/'>Ev Cath</LogoTitle>
        <FootNote text='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
      </GroupHeader>
      <nav>
        <GroupNavigation>
          {navButtons.map(({ name, path }) => {
            return (
              <li>
                <NavLink key={name} name={name} path={path} />
              </li>
            );
          })}
        </GroupNavigation>
      </nav>
    </NavigationContainer>
  );
}

export default FullScreenNavigation;

const NavigationContainer = styled.div`
  width: 25%;
  max-width: 398px;
  height: 100%;
  padding: 4% 3%;
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

const GroupHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const GroupNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`;
