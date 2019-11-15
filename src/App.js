import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Routes from './routes';
import { Navbar } from './components/organisms';
import WithSuspenseLoader from './WithSuspenseLoader';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './CartContext';

function App() {
  const [cart, updateCart] = useState({
    selectedOrders: []
  })
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartContext.Provider value={{...cart, updateCart}}>
          <Navbar />
          <Routes />
        </CartContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default WithSuspenseLoader(App);
