// import { useState } from 'react'
// import reactLogo from '/img/react.svg'
// import viteLogo from '/img/vite.svg'
import { HashRouter, Routes, Route } from 'react-router-dom';

// Components Layout
import { Header } from './features/layout/components/Header';
import { Footer } from './features/layout/components/Footer';
import { Content } from './features/layout/components/Content';

// Components Auth

import { MyAccount } from './features/auth/components/MyAccount';
import { MyBuys } from './features/auth/components/MyBuys';
import { MyFavourite } from './features/auth/components/MyFavourite';

// Components Articles
import { Articles } from './features/articles/components/Articles';
import { Favourite } from './features/articles/components/Favourite';

// Theme Context
import { ThemeProvider } from "./features/articles/hooks/UseContext";

//Cart Provide
import { CartProvider } from "./features/layout/hooks/ContextCart";

function App() {
  return (
    <>
      <CartProvider>
        <ThemeProvider>
          <HashRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/myaccount" element={<MyAccount />} />
              <Route path="/mybuys" element={<MyBuys />} />
              <Route path="/cart" element={<MyFavourite />} />
            </Routes>
            <Footer />
          </HashRouter>
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default App
