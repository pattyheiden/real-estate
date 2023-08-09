import React from "react";
import HouseContextProvider from "@/components/HouseContext";
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header />
      <HouseContextProvider>        
          <React.StrictMode>
            <Component {...pageProps} />
          </React.StrictMode>      
      </HouseContextProvider>
    </div>
  )
}