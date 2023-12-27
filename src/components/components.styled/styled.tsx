import Link from 'next/link';
import styled from 'styled-components';

export const LogoTitle = styled(Link)`
  font-weight: 400;
  font-size: 1.7em;
  letter-spacing: 0.1em;
  &:hover {
    color: #000;
    transition: 1s ease;
  }
`;
