"use client";
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import { ThemeProvider } from "styled-components";

type ProvidersProps = PropsWithChildren<{ children: React.ReactNode }>;

export default function Providers(props: ProvidersProps) {
  const { children } = props;

  const [qc] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={qc}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
