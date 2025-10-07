// app/(main)/layout.jsx

// import Footer from '@/components/common/Footer';

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
        <Footer />
      </body>
    </html>
  );
}
