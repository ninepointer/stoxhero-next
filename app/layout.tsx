import '@/app/ui/global.css';
import { WorkSans } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${WorkSans.className} antialiased`}>{children}</body>
    </html>
  );
}