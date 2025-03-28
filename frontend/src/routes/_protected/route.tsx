import { getSession } from '@/lib/auth-client';
import { cachedGetSession } from '@/lib/utils';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
  component: RouteComponent,
  beforeLoad: async (ctx) => {
    console.log(`Accessing a protected component`)
    const session = await cachedGetSession();

    console.log(session)
    if (!session.data?.user) {
      return redirect({
        to: '/login',
      });
    }
  },
})

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}
