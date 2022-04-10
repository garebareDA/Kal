import React from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { NextUIProvider } from "@nextui-org/react";
import { FirebaseProvider } from "./hooks/firebase";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App():React.ReactElement {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <FirebaseProvider>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </FirebaseProvider>
        </NextUIProvider>
      </body>
    </html>
  );
};
