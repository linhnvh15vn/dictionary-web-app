import React, { InputHTMLAttributes } from 'react';
import classnames from 'classnames/bind';

import styles from './input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const cx = classnames.bind(styles);

export default function Input(props: Props) {
  return (
    <div className={cx('search-container')}>
      <input type="text" className={cx('search-input')} {...props} />
      <button className={cx('search-button')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
