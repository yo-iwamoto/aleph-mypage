import React, { ComponentType } from "react";
import { Layout } from "@/components/Layout.tsx";
import { PageProps } from "https://deno.land/x/aleph@v0.3.0-alpha.33/framework/react/pageprops.ts";
import "./styles/layout.css";
import "https://esm.sh/tailwindcss/dist/tailwind.min.css";

export default function App(
  // deno-lint-ignore no-explicit-any
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: PageProps },
) {
  return (
    <main>
      <head>
        <title>Iwamoto Yo</title>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </main>
  );
}
