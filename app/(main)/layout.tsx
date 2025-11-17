
import { Toaster } from "@/components/ui/sonner"
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
       
        <main >
          {children}
        </main>
        <Toaster position="top-right" richColors />
        <Footer />
      </body>
    </html>
  );
}
