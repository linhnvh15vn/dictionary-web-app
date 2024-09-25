'use client';

import React, { FormEvent, useCallback, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Input from '@/components/input';

interface Props {
  // Add your component props here
}

export default function SearchForm(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [word, setWord] = useState('');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(pathname + '?' + createQueryString('q', word));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={(e) => setWord(e.target.value)} />
    </form>
  );
}
