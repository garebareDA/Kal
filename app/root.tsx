import React, { ReactChild } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import { NextUIProvider } from "@nextui-org/react";
import icon from "./assets/image/icon.png";

export const meta: MetaFunction = () => {
  return { title: "DotToys" };
};

export const links: LinksFunction = () => {
  return [{ rel: "shortcut icon", href: icon }];
};

export default function App():React.ReactElement {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="DotToys" />
        <meta property="og:description" content="DotToys" />
        <meta property="og:url" content="https://dottoys.garebare.net" />
        <meta property="og:image" content="https://dottoys.garebare.net/thumbnail.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}