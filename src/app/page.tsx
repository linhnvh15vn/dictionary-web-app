import React from 'react';

import classNames from 'classnames/bind';

import PlayButton from '@/components/play-button';
import SearchForm from '@/components/search-form';
import styles from './page.module.scss';

interface Props {
  searchParams: {
    q: string;
  };
}

const fetchData = async (word: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );

  const data = await response.json();
  return data[0] as Word;
};

const cx = classNames.bind(styles);

export default async function Page({ searchParams }: Props) {
  const data = await fetchData(searchParams.q);

  if (!data) {
    return <h1>Enter word</h1>;
  }

  const handledData = {
    ...data,
    phonetics: data.phonetics.filter(
      (phonetic) => phonetic.text && phonetic.audio !== '',
    ),
  };

  return (
    <main className={cx('home-container')}>
      <SearchForm />

      <section className={cx('phonetic-section')}>
        <h1 className={cx('word')}>{handledData.word}</h1>
        <h2 className={cx('phonetic')}>
          {handledData.phonetic || handledData.phonetics[0].text}
        </h2>
        <div className={cx('btn')}>
          <PlayButton audioSrc={handledData.phonetics[0].audio} />
        </div>
      </section>

      {data.meanings.map((meaning) => (
        <section key={meaning.partOfSpeech} className={cx('meaning-section')}>
          <h2 className={cx('part-of-speech')}>{meaning.partOfSpeech}</h2>
          <div>
            <h3>Meaning</h3>
            <ul className={cx('meaning-list')}>
              {meaning.definitions.map(({ definition, example }) => (
                <li key={definition}>
                  <p className={cx('definition')}>{definition}</p>
                  {example && <p className={cx('example')}>{`"${example}"`}</p>}
                </li>
              ))}
            </ul>
          </div>

          {!!meaning.synonyms.length && (
            <div className={cx('synonyms')}>
              <h3>Synonyms</h3>
              <p>{meaning.synonyms.join(' ')}</p>
            </div>
          )}

          {!!meaning.antonyms.length && (
            <div className={cx('antonyms')}>
              <h3>Antonyms</h3>
              <p>{meaning.antonyms.join(' ')}</p>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
