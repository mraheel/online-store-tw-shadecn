"use client";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { store } from "@/store";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>
    <Toaster />
    {children}
  </Provider>;
};

export default Providers;