import './globals.css';
import type { Metadata } from 'next';

import Header from '@/components/header';
import SearchForm from '@/components/search-form';
import { ThemeProvider } from '@/providers/theme.provider';
import { FontProvider } from '@/providers/font-provider';

export const metadata: Metadata = {
  title: 'Dictionary Web App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FontProvider>
      <html lang="en">
        <ThemeProvider>
          <body>
            <Header />
            <SearchForm />
            {children}
          </body>
        </ThemeProvider>
      </html>
    </FontProvider>
  );
}
