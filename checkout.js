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

export function setUpKhaltiCheckout(el, options = {}, config = {}) {
  const checkout = new KhaltiCheckout({
    ...defaultConfig,
    ...config,
  });

  el.onclick = () => {
    checkout.show(options);
  };
}

export const esewaCheckout = async (params) => {
  const path = "https://uat.esewa.com.np/epay/main";

  let form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute("action", path);

  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
};
