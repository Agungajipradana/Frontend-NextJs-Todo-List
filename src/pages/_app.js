import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import AppShell from "@/components/layouts/AppShell";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </Provider>
  );
}
