import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/';
import { Global } from '@emotion/react';
import { GlobalCSS } from '../styles/Global';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Global styles={GlobalCSS} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
