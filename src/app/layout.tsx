import '@/styles/globals.css';

import { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme/theme-provider';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,

    icons: {
        icon: '/favicon.ico',
        // shortcut: '/favicon-16x16.png',
        // apple: '/apple-touch-icon.png',
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang='en' suppressHydrationWarning>
                <head />
                <body
                    className={cn(
                        'min-h-screen bg-background font-sans antialiased',
                        fontSans.variable
                    )}>
                    <ThemeProvider
                        attribute='class'
                        // defaultTheme='system'
                        // enableSystem
                        disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
