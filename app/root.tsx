import React from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import { Container, Row, Spacer, Text, Button, Card, NextUIProvider } from "@nextui-org/react";
import { FirebaseProvider } from "./hooks/firebase";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kal Garebare's blog",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "Kal Garebare's blog",
  "og:type": "website",
  "og:url": "https://kal.garebare.net",
  "og:image": "https://kal.garebare.net/thum.png",
  "og:description": "Kal Garebare's blog",
  "twitter:card": "summary_large_image",
  "twitter:site": "@garebare521",
  "twitter:creator": "@garebare521",
});

export default function App(): React.ReactElement {
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

export function CatchBoundary(): React.ReactElement {
  const caught = useCatch();
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Container>
            <Spacer y={3} />
            <Row justify="center">
              <Card css={{
                mw: "500px",
              }}>
                <Row justify="center">
                  <Text size={40}>{caught.status}</Text>
                </Row>
                <Row justify="center">
                  <Text size={32}>{caught.statusText}</Text>
                </Row>
                <Spacer y={3} />
                <Row justify="center">
                  <Button onClick={() => {
                    location.href = "/";
                  }}>メインページに戻る</Button>
                </Row>
              </Card>
            </Row>
          </Container>
        </NextUIProvider>
      </body>
    </html>
  );
}
