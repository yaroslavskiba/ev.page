'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../app/pages.style.module.css';

function pathName() {
  const path = usePathname();

  return path;
}

export { pathName };
