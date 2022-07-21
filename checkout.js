import KhaltiCheckout from "khalti-checkout-web";

const defaultConfig = {
  publicKey: import.meta.env.VITE_KHALTI_PUBLIC_KEY,
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  paymentPreference: [
    "MOBILE_BANKING",
    "KHALTI",
    "EBANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default function (el, options = {}, config = {}) {
  const checkout = new KhaltiCheckout({
    ...defaultConfig,
    ...config,
  });

  el.onclick = function () {
    checkout.show(options);
  };
}
