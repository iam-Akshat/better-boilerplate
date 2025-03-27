import * as React from "react";
import { createFileRoute, getRouteApi, redirect, useLoaderData } from "@tanstack/react-router";
import { authClient, getSession, useSession } from "../../lib/auth-client";

export const Route = createFileRoute("/_protected/about")({
  component: AboutComponent,
  async loader(ctx) {
    console.log(ctx);
    const a = await getSession();

    return { a: a.data?.user.id };
  },
});

function AboutComponent() {
  const routeApi = getRouteApi("/_protected/about");
  const data = routeApi.useLoaderData();
  const whats = useSession();
  console.log(data.a);
  return (
    <div className="p-2">
      <h3>About</h3>
    </div>
  );
}
