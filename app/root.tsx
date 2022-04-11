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
  title: "Kal Garebare's blog",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "Kal Garebare's blog",
  "og:type": "website",
  "og:url": "https://kal.garebare.com",
  "og:image": "https://kal.garebare.com/thum.png",
  "og:description": "Kal Garebare's blog",
  "twitter:card": "summary_large_image",
  "twitter:site": "@garebare521",
  "twitter:creator": "@garebare521",
});

export default function App():React.ReactElement {
  return (
    <html lang="ja">
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
