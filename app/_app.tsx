import React from 'react';

import { AppProps } from 'next/app';
import Layout from './layout';
import { AuthProvider } from './components/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
