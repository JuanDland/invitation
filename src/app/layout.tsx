import type { Metadata } from "next";
import { Geist_Mono, Great_Vibes, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ variable: "--font-raleway", subsets: ['latin'], weight: ['200', '600'] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({ variable: "--font-great-vibes", subsets: ['latin'], weight: '400' });


export const metadata: Metadata = {
  title: "Invitación",
  description: "Invitación para cumpleaños",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${greatVibes.variable} ${raleway.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
