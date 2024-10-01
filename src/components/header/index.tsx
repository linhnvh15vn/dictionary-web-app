'use client';

import React from 'react';
import Image from 'next/image';

import classNames from 'classnames/bind';

import Switch from '@/components/switch';
import logo from '@/assets/images/logo.svg';
import { useTheme } from '@/providers/theme.provider';
import { useFont } from '@/providers/font-provider';

import styles from './header.module.scss';
import Dropdown from '@/components/dropdown';

const cx = classNames.bind(styles);

type KV = {
  [key: string]: string;
};

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { font, setFont } = useFont();

  const FONT_MAP: KV = {
    Inter: 'Sans Serif',
    Lora: 'Serif',
    Inconsolata: 'Mono',
  };

  const options = [
    {
      label: 'Sans Serif',
      value: 'Inter',
    },
    {
      label: 'Serif',
      value: 'Lora',
    },
    {
      label: 'Monospace',
      value: 'Inconsolata',
    },
  ];

  return (
    <header>
      <div className={cx('header-container')}>
        <Image src={logo} alt="logo" />

        <div className={cx('header-mode-toggle')}>
          <Dropdown
            options={options}
            value={FONT_MAP[font]}
            onSelectItem={setFont}
          />
          <div className={cx('separator')} />
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
