import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Keycloak from "keycloak-js";

let initOptions = {
  url: "https://signin.frederikkrogh.dk",
  realm: "webapp",
  clientId: "webapp-frontend",
  onLoad: "login-required",
};

let keycloak = new Keycloak(initOptions);

keycloak
  .init({ onLoad: initOptions.onLoad })
  .then((auth) => {
    if (!auth) {
      window.location.reload();
    } else {
      console.log("Authenticated");
    }

    createApp(App).mount("#app");
  })
  .catch((error) => {
    console.log(error);
    console.error("Authenticated Failed");
  });

keycloak.onTokenExpired = () => {
  console.log("Token expired");

  keycloak
  .updateToken(30 * 60)
  .then(() => {
    console.log("Token renewed");
  })
  .catch(() => {
    keycloak.login()
  })
}

export default keycloak;