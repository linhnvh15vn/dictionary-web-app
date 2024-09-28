'use client';

import React from 'react';
import Image from 'next/image';

import classNames from 'classnames/bind';

import Switch from '@/components/switch';
import logo from '@/assets/images/logo.svg';
import { useTheme } from '@/providers/theme.provider';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className={cx('header-container')}>
        <Image src={logo} alt="logo" />

        <div className={cx('header-mode-toggle')}>
          <Switch onChange={toggleTheme} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke={theme === 'light' ? '#838383' : '#a445ed'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
