"use client"
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { store } from "@/store"
import { Toaster } from 'react-hot-toast'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}> 
        {children}
        <Toaster />
      </Provider>
     </SessionProvider>
  )};

export default Providers;