import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import PropTypes from "prop-types";
import { Suspense } from "react";

export const AppProvider = ({ children }) => {
  const queryCache = new QueryCache();

  const queryClient = new QueryClient({
    queryCache: queryCache,
    defaultOptions: {
      queries: {
        staleTime: 10 * 60 * 1000, // 10 minutes
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Suspense fallback={<div>loading...</div>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
