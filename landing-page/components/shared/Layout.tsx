import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isOnAuthPage =
    router.pathname === '/login' || router.pathname === '/register';

  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {!isOnAuthPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};
export default Layout;
