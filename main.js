import "./style.css";
import javascriptLogo from "./javascript.svg";
import setUpKhaltiCheckout from "./checkout";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Khalti checkout web demo</h1>
    <button id="payment-button">Pay with khalti</button>
  </div>
`;

let btn = document.getElementById("payment-button");
setUpKhaltiCheckout(
  btn,
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
