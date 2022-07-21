import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setUpKhaltiCheckout, esewaCheckout } from "./checkout";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Nepali Payment Web Demo</h1>
    <button id="khalti-payment-button">Pay with khalti</button>
    <button id="esewa-payment-button">Pay with esewa</button>
  </div>
`;

const khaltiBtn = document.getElementById("khalti-payment-button");
const esewaBtn = document.getElementById("esewa-payment-button");

setUpKhaltiCheckout(
  khaltiBtn,
  { amount: 10000 },
  {
    eventHandler: {
      onSuccess: (payload) => {
        console.log(payload);
      },
      onError: (error) => {
        console.error(error);
      },
      onClose: () => {
        console.log("widget is closing");
      },
    },
  }
);

esewaBtn.onclick = () =>
  esewaCheckout({
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
  });
