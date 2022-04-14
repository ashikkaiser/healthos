import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import store from "./store/index"
const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
  }
});
const app = (
  <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()
