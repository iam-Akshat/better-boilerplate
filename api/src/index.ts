import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import betterAuthView from "./utils/auth-view";

const app = new Elysia()
  .use(cors({ origin: "http://localhost:3001" }))
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .all("/api/auth/*", betterAuthView);
app.listen(process.env.BACKEND_PORT || 8000);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
