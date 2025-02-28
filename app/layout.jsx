import './globals.css';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto"
});

export const metadata = {
  title: 'Web Developer Portfolio',
  description: 'Professional web developer portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}