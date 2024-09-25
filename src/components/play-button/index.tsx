'use client';

import React, { ButtonHTMLAttributes, useRef } from 'react';

import classNames from 'classnames/bind';

import styles from './play-button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  audioSrc: string;
}

const cx = classNames.bind(styles);

export default function PlayButton({ audioSrc, ...props }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  return (
    <button
      className={cx('play-button-container')}
      {...props}
      onClick={handlePlay}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
      >
        <g fill="#A445ED" fillRule="evenodd">
          <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>

      <audio ref={audioRef} src={audioSrc} preload="auto"></audio>
    </button>
  );
}
