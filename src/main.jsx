import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";


const theme = extendTheme({
  fonts: {
    heading: `'Be Vietnam Pro', sans-serif`,
    body: `'Be Vietnam Pro', sans-serif`,
  },

  colors: {
    brand: {
      900: "#262A4B",
      800: "#3F4577",
      700: "#794DE3",
      600: "#46A6F7",
      500: "#EC5858",
      400: "#2CAAC8",
      300: "#2CC87F",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
