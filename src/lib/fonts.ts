import { Inter as FontSans } from 'next/font/google';

/* Defining the font */
export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

/** REF: https://github.com/shadcn-ui/ui/blob/main/templates/next-template/lib/fonts.ts */
