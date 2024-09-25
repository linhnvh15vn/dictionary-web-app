import React from 'react';
import Image from 'next/image';

import classNames from 'classnames/bind';

import Switch from '@/components/switch';
import logo from '@/assets/images/logo.svg';
import iconMoon from '@/assets/images/icon-moon.svg';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header>
      <div className={cx('header-container')}>
        <Image src={logo} alt="logo" />

        <div className={cx('header-mode-toggle')}>
          <Switch />
          <Image src={iconMoon} alt="mode-toggle" width={20} height={20} />
        </div>
      </div>
    </header>
  );
}
