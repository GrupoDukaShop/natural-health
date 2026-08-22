"use client";

import { useEffect } from "react";

const checkoutUrl = "https://pay.hotmart.com/U107205089N";

export default function CheckoutRedirect() {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      window.location.replace(checkoutUrl);
    }, 900);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return (
    <main className="checkout-loading" aria-label="Loading checkout">
      <div className="loader" role="status" aria-label="Loading" />
    </main>
  );
}