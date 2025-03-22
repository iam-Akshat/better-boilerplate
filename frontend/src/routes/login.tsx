import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from "@/components/login-form"
import { useSession } from '@/lib/auth-client'

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}


export const Route = createFileRoute('/login')({
  component: LoginPage,
  async beforeLoad(ctx) {
    const session = await useSession();
  },
})

