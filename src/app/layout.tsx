import './globals.css';

export const metadata = {
  title: 'Kshitij Tewari',
  description: 'Research Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
