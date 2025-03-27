import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
  async beforeLoad(ctx) {
    console.log(ctx);
  },
});

function RouteComponent() {
  return <div>Hello </div>;
}
