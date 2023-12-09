import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Routing imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

// Wallet imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { scrollSepolia, arbitrumSepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";

// Walet Config
const { chains, publicClient } = configureChains(
  [scrollSepolia,arbitrumSepolia],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "bankwallet",
  projectId: "0e6f568e1144d3f8a278585f3e311bd1",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

// Routing Config - ADD OTHER ROUTES HERE
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiConfig config={wagmiConfig}>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    <RainbowKitProvider
      chains={chains}
      modalSize="compact"
      theme={midnightTheme({
        accentColor: "#E01A4F",
        accentColorForeground: "#0C090D",
        borderRadius: "small",
        fontStack: "system",
        overlayBlur: "small",
      })}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RainbowKitProvider>
    <ToastContainer />
  </WagmiConfig>,
);
