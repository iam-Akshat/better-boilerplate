import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useRouteContext,
  useRouterState,
} from "@tanstack/react-router";
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
  const routeParams = useRouterState();

  return (
    <>
      {routeParams.location.pathname === "/" ? (
        <div className="w-full flex justify-center items-center bg-black">
          <PublicRootLayout />
        </div>
      ) : (
        <Outlet />
      )}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
