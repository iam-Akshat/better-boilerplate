import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PublicRootLayout from "@/layouts/PublicRootLayout";

export const Route = createRootRoute({
  component: RootComponent,
  loader(ctx) {
    console.log("Loading root route", ctx);
    return {};
  },
});

function RootComponent() {
  return (
    <>
      <PublicRootLayout />

      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
