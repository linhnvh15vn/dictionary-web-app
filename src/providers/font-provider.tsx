'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface FontContextProps {
  font: string;
  setFont: (font: string) => void;
}

interface FontProviderProps {
  children: ReactNode;
}

export const FontContext = createContext<FontContextProps>({
  font: '',
  setFont: () => {},
});

export function FontProvider({ children }: FontProviderProps) {
  const [font, setFont] = useState(
    () => localStorage.getItem('font') ?? 'Inter',
  );

  useEffect(() => {
    document.body.style.fontFamily = font;
    localStorage.setItem('font', font);
  }, [font]);

  return (
    <FontContext.Provider
      value={{
        font,
        setFont,
      }}
    >
      {children}
    </FontContext.Provider>
  );
}

export const useFont = () => {
  return useContext(FontContext);
};
