"use client";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { store } from "@/store";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Toaster />
        {children}
      </Provider>
    </SessionProvider>
  )};

export default Providers;