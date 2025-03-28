import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getSession } from "./auth-client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function cachedGetSession(): Promise<ReturnType<typeof getSession>> {
  const lastReq = localStorage.getItem("auth_last_getSession");
  const existingSession = localStorage.getItem("auth_session");
  if (
    !lastReq ||
    new Date(lastReq).getMinutes() + 5 > new Date().getMinutes() ||
    !existingSession
  ) {
    localStorage.setItem("auth_last_getSession", new Date().toISOString());
    const session = await getSession();
    console.log(session)
    localStorage.setItem("auth_session", JSON.stringify(session));
    return session;
  }

  return JSON.parse(existingSession) as ReturnType<typeof getSession>;
}
