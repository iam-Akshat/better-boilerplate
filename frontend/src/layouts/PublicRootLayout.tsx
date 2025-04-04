import { Link, Outlet } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Layers, Clock, ArrowRight, Star, Github } from "lucide-react";

export default function PublicRootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white py-4 px-7 mx-auto">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-60"></div>

      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 flex-col md:flex-row">
          <div className="flex gap-3 items-center text-xl font-bold">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"></div>
              <div className="relative rounded-full bg-black p-1">
                <CheckCircle className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-extrabold">
              TaskFlow
            </span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              <Link
                href="#features"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                Pricing
              </Link>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <Link to="/login">Log in </Link>
              </Button>

              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                asChild
              >
                <Link to="/signup">Sign up free</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-20 md:py-32 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 text-purple-400" />
                    <span className="text-gray-300">Next-gen productivity</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                    Simple on the surface.
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      Powerful underneath.
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    TaskFlow helps you organize your life without the complexity. Get more done with
                    less mental overhead.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-900/30 gap-1"
                  >
                    Get started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-700 text-purple-400 hover:bg-purple-950/50 gap-1"
                  >
                    <Github className="h-4 w-4" /> Star on GitHub
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px]">
                  {/* Glow effect behind the app mockup */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-lg"></div>
                  <div className="relative rounded-2xl border border-white/20 bg-black/60 backdrop-blur-sm shadow-2xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=800"
                      width={800}
                      height={600}
                      alt="TaskFlow app screenshot"
                      className="w-full object-cover"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-0.5 shadow-xl animate-float">
                    <div className="h-full w-full rounded-xl bg-black flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-purple-500" />
                    </div>
                  </div>
                  <div className="absolute -left-6 -bottom-6 h-20 w-20 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 shadow-xl animate-float animation-delay-2000">
                    <div className="h-full w-full rounded-xl bg-black flex items-center justify-center">
                      <Zap className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-20 md:py-32 relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Everything you need, nothing you don't
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                  TaskFlow combines simplicity with powerful features to help you stay organized and
                  productive.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {/* Feature cards with hover effects */}
              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 rounded-full bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Zap className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">
                    Optimized for speed with instant search and real-time updates.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 rounded-full bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Layers className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Organization</h3>
                  <p className="text-gray-400">
                    Intelligent task grouping and priority management that adapts to your workflow.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 rounded-full bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Time Tracking</h3>
                  <p className="text-gray-400">
                    Built-in time tracking to help you understand where your time goes.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 rounded-full bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
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
                      className="h-6 w-6 text-purple-400"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Distraction Free</h3>
                  <p className="text-gray-400">
                    Clean interface designed to keep you focused on what matters.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 rounded-full bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
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
                      className="h-6 w-6 text-purple-400"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Customizable</h3>
                  <p className="text-gray-400">
                    Tailor TaskFlow to your needs with themes, layouts, and workflow customization.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 rounded-full bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
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
                      className="h-6 w-6 text-purple-400"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Secure Sync</h3>
                  <p className="text-gray-400">
                    End-to-end encrypted sync across all your devices with offline support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Loved by productivity enthusiasts
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                  See what our users have to say about TaskFlow.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative h-12 w-12">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm"></div>
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="relative rounded-full border border-white/20"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Alex Johnson</p>
                      <p className="text-sm text-gray-400">Product Designer</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-400">
                      "TaskFlow has completely transformed how I manage my projects. The simplicity
                      makes it easy to get started, but the power features are there when I need
                      them."
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative h-12 w-12">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm"></div>
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="relative rounded-full border border-white/20"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Sarah Chen</p>
                      <p className="text-sm text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-400">
                      "I've tried dozens of todo apps, but TaskFlow is the first one that actually
                      stuck. It's fast, intuitive, and adapts to my workflow instead of forcing me
                      to adapt to it."
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative h-12 w-12">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-sm"></div>
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="relative rounded-full border border-white/20"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Michael Rodriguez</p>
                      <p className="text-sm text-gray-400">Entrepreneur</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-400">
                      "As someone who juggles multiple businesses, TaskFlow has been a game-changer.
                      The time tracking feature alone has saved me hours each week."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-20 md:py-32 relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Simple, transparent pricing
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                  Start for free, upgrade when you need more power.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-white">Free</h3>
                    <p className="text-gray-400">Perfect for getting started</p>
                    <p className="mt-2 text-3xl font-bold text-white">$0</p>
                    <p className="text-gray-400">Forever free</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Up to 3 projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Basic task management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Mobile app access</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white/10 text-white hover:bg-white/20 border-0">
                    Get Started
                  </Button>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-purple-500/50 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur transition duration-300 group-hover:opacity-50"></div>
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs text-white">
                  Most Popular
                </div>
                <div className="relative">
                  <div className="mb-4 flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-white">Pro</h3>
                    <p className="text-gray-400">For individuals and small teams</p>
                    <p className="mt-2 text-3xl font-bold text-white">$9</p>
                    <p className="text-gray-400">per month</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Unlimited projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Advanced task management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Time tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Customizable workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-900/30">
                    Get Started
                  </Button>
                </div>
              </div>

              <div className="group relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:shadow-xl hover:shadow-purple-900/20">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-300 group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-white">Team</h3>
                    <p className="text-gray-400">For organizations and large teams</p>
                    <p className="mt-2 text-3xl font-bold text-white">$19</p>
                    <p className="text-gray-400">per user/month</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Team collaboration tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Admin controls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-400" />
                      <span className="text-gray-300">SSO & enterprise security</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-white/10 text-white hover:bg-white/20 border-0">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to simplify your task management?
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                    Join thousands of users who have transformed their productivity with TaskFlow.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-900/30 gap-1"
                  >
                    Get started for free <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-700 text-purple-400 hover:bg-purple-950/50"
                  >
                    Schedule a demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px]">
                  {/* Glow effect behind the app mockup */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-lg"></div>
                  <div className="relative rounded-2xl border border-white/20 bg-black/60 backdrop-blur-sm shadow-2xl overflow-hidden">
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
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/10 py-6 md:py-0 bg-black/90 backdrop-blur-lg">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"></div>
              <div className="relative rounded-full bg-black p-1">
                <CheckCircle className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-bold">
              TaskFlow
            </span>
          </div>
          <p className="text-center text-xs leading-loose text-gray-400 md:text-left">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
