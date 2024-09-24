'use client';

import React, { InputHTMLAttributes, useId } from 'react';

import classNames from 'classnames/bind';
import styles from './switch.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // Add your component props here
}

const cx = classNames.bind(styles);

export default function Switch(props: Props) {
  const id = useId();

  return (
    <div className={cx('switch-container')}>
      <input
        id={id}
        type="checkbox"
        className={cx('switch-input')}
        {...props}
      />
      <label htmlFor={id} className={cx('switch-label')}></label>
    </div>
  );
}
