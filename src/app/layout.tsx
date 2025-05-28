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
  metadataBase: new URL("https://invitacion.appdland.com"),
  title: "Invitación para cumpleaños",
  description: "Con cariño te comparto esta invitación",
  icons: {
    icon: "/50.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Invitación para cumpleaños",
    description: "Con cariño te comparto esta invitación",
    images: [
      {
        url: "/logo.png",
        width: 764,
        height: 400,
        alt: "Invitación para cumpleaños",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${greatVibes.variable} ${raleway.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
