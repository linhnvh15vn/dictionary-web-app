import React from 'react';
import classNames from 'classnames/bind';

import styles from './not-found.module.scss';

const cx = classNames.bind(styles);

export default function NotFound() {
  return (
    <main className={cx('not-found-container')}>
      <span>😕</span>
      <h3>No Definitions Found</h3>
      <p>
        Sorry pal, we could not find definitions for the word you were looking
        for.You can try the search again at later time or head to the web
        instead.
      </p>
    </main>
  );
}
