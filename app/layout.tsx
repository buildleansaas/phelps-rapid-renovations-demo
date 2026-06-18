import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phelps Rapid Renovations LLC | 24 Hour Repairs in Charlotte, NC',
  description: 'Phelps Rapid Renovations LLC provides 24 hour repairs, plumbing, carpentry, roofing, painting, kitchen and bathroom remodeling, flooring, decks, pressure washing, junk removal, and more in Charlotte, NC.',
  openGraph: {
    title: 'Phelps Rapid Renovations LLC',
    description: '24 hour repairs, plumbing, renovations, and home services in Charlotte, NC.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
