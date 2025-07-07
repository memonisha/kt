
export const metadata = {
  title: "Kshitij Tewari",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
