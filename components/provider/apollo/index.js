// "use client";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// export const Providers = ({ children }) => {
//   const client = new ApolloClient({
//     uri: "https://rickandmortyapi.com/graphql",
//     cache: new InMemoryCache(),
//   });
//   return <ApolloProvider client={client}>{children}</ApolloProvider>;
// };

"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://main--time-pav6zq.apollographos.net/graphql",
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
