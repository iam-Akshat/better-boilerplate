import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Github, Layers, Zap } from "lucide-react";
import { Clock } from "lucide-react";
export const Route = createFileRoute("/_public/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Simple on the surface.
                  <br />
                  Powerful underneath.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  TaskFlow helps you organize your life without the complexity. Get more done with
                  less mental overhead.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Get started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-1">
                  <Github className="h-4 w-4" /> Star on GitHub
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="TaskFlow app screenshot"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything you need, nothing you don't
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                TaskFlow combines simplicity with powerful features to help you stay organized and
                productive.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-center text-muted-foreground">
                Optimized for speed with instant search and real-time updates.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Smart Organization</h3>
              <p className="text-center text-muted-foreground">
                Intelligent task grouping and priority management that adapts to your workflow.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Time Tracking</h3>
              <p className="text-center text-muted-foreground">
                Built-in time tracking to help you understand where your time goes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Distraction Free</h3>
              <p className="text-center text-muted-foreground">
                Clean interface designed to keep you focused on what matters.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Customizable</h3>
              <p className="text-center text-muted-foreground">
                Tailor TaskFlow to your needs with themes, layouts, and workflow customization.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Secure Sync</h3>
              <p className="text-center text-muted-foreground">
                End-to-end encrypted sync across all your devices with offline support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Loved by productivity enthusiasts
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our users have to say about TaskFlow.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="User avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">Product Designer</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">
                  "TaskFlow has completely transformed how I manage my projects. The simplicity
                  makes it easy to get started, but the power features are there when I need them."
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="User avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">
                  "I've tried dozens of todo apps, but TaskFlow is the first one that actually
                  stuck. It's fast, intuitive, and adapts to my workflow instead of forcing me to
                  adapt to it."
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="User avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Entrepreneur</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">
                  &quot;As someone who juggles multiple businesses, TaskFlow has been a
                  game-changer. The time tracking feature alone has saved me hours each week."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simple, transparent pricing
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start for free, upgrade when you need more power.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex flex-col gap-1">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-muted-foreground">Perfect for getting started</p>
                <p className="mt-2 text-3xl font-bold">$0</p>
                <p className="text-muted-foreground">Forever free</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Up to 3 projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Basic task management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Mobile app access</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm relative">
              <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Most Popular
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-muted-foreground">For individuals and small teams</p>
                <p className="mt-2 text-3xl font-bold">$9</p>
                <p className="text-muted-foreground">per month</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Advanced task management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Time tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Customizable workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="mb-4 flex flex-col gap-1">
                <h3 className="text-xl font-bold">Team</h3>
                <p className="text-muted-foreground">For organizations and large teams</p>
                <p className="mt-2 text-3xl font-bold">$19</p>
                <p className="text-muted-foreground">per user/month</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Team collaboration tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Admin controls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SSO & enterprise security</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to simplify your task management?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who have transformed their productivity with TaskFlow.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Get started for free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a demo
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="TaskFlow app on mobile"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
