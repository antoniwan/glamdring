import { createContext, useState, useContext } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CheckoutStateProvider({ children }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  function toggleCheckout() {
    setCheckoutOpen(!checkoutOpen);
  }

  function closeCheckout() {
    setCheckoutOpen(false);
  }

  function openCheckout() {
    setCheckoutOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ checkoutOpen, toggleCheckout, openCheckout, closeCheckout }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCheckout() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CheckoutStateProvider, LocalStateContext, useCheckout };
