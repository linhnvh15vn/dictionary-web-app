'use client';

import React, { HTMLAttributes, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './dropdown.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string;
  options: { label: string; value: string }[];
  onSelectItem: (value: string) => void;
}

const cx = classNames.bind(styles);

export default function Dropdown({
  value,
  options,
  onSelectItem,
  ...props
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx('dropdown-container')} {...props}>
      <div onClick={() => setOpen(!open)} className={cx('dropdown-selected')}>
        <span>{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </div>

      {open && (
        <div className={cx('dropdown-content')}>
          {options.map(({ value, label }) => (
            <div
              key={value}
              className={cx('dropdown-item')}
              onClick={() => {
                onSelectItem(value);
                setOpen(false);
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
