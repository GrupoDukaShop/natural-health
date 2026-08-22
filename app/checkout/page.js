import CheckoutRedirect from "./CheckoutRedirect";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLoading() {
  return <CheckoutRedirect />;
}