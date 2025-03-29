import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getSession } from "./auth-client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function cachedGetSession(): Promise<ReturnType<typeof getSession>> {
  const lastReq = Number(localStorage.getItem("auth_last_getSession"));
  const existingSession = JSON.parse(localStorage.getItem("auth_session") || "{}") as ReturnType<
    typeof getSession
  >;
  if (!lastReq || Date.now() - lastReq > 5 * 1000 * 10 || !existingSession) {
    localStorage.setItem("auth_last_getSession", Date.now().toString());
    const session = await getSession();
    localStorage.setItem("auth_session", JSON.stringify(session));

    if (session.error) {
      localStorage.removeItem("auth_session");
      localStorage.removeItem("auth_last_getSession");
    }
    return session;
  }

  return existingSession as ReturnType<typeof getSession>;
}
