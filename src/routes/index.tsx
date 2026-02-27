import AppLogoIcon from '@/components/app-logo-icon'
import { ModeToggle } from '@/components/mode-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/hooks/use-auth'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  Code2Icon,
  FileCodeIcon,
  LayersIcon,
  LockIcon,
  RocketIcon,
  SparklesIcon,
  ZapIcon,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = useAuth()

  const features = [
    {
      icon: ZapIcon,
      title: 'TanStack Router',
      description:
        'Type-safe routing with automatic code splitting and data loading',
      color: 'text-orange-500',
    },
    {
      icon: LayersIcon,
      title: 'TanStack Query',
      description:
        'Powerful server state management with caching and synchronization',
      color: 'text-red-500',
    },
    {
      icon: FileCodeIcon,
      title: 'TanStack Form',
      description: 'Headless form validation with excellent TypeScript support',
      color: 'text-yellow-500',
    },
    {
      icon: SparklesIcon,
      title: 'shadcn/ui',
      description:
        'Beautiful, accessible components built with Radix UI and Tailwind',
      color: 'text-purple-500',
    },
    {
      icon: Code2Icon,
      title: 'TypeScript',
      description: 'Full type safety across your entire application',
      color: 'text-blue-500',
    },
    {
      icon: LockIcon,
      title: 'Authentication',
      description: 'Pre-configured auth system with protected routes',
      color: 'text-green-500',
    },
  ]

  return (
    <div className="from-background via-background to-muted/20 min-h-screen bg-linear-to-br">
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <AppLogoIcon className="size-6" />
            <span className="text-lg font-bold">React Starter Kit</span>
          </div>
          <nav className="flex items-center gap-4">
            {user ? (
              <Button variant="outline" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  asChild
                  className="hidden sm:inline-flex"
                >
                  <Link to="/login">Log In</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
            <ModeToggle />
          </nav>
        </div>
      </header>

      <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="outline">React 19</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Vite</Badge>
          </div>

          <h1 className="from-foreground via-foreground/80 to-foreground/60 mb-6 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Build Faster with
            <br />
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Modern React Stack
            </span>
          </h1>

          <p className="text-muted-foreground mb-8 max-w-2xl text-lg sm:text-xl">
            A production-ready starter kit with TanStack Router, Query, and
            Form, powered by shadcn/ui components. Everything you need to build
            modern web applications.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            {!user && (
              <>
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    Get Started <ArrowRightIcon className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://github.com/jhsebas741/react-starter-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path
                        className="fill-current"
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      />
                    </svg>
                    View on GitHub
                  </a>
                </Button>
              </>
            )}
            {user && (
              <Button size="lg" asChild>
                <Link to="/dashboard">
                  Go to Dashboard <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg">
            Built with the best tools in the React ecosystem
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <div className={`mb-2 ${feature.color}`}>
                  <feature.icon className="size-8" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Quick Start
            </h2>
            <p className="text-muted-foreground text-lg">
              Get up and running in seconds
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-2 text-lg">
                <RocketIcon className="size-5" />
                Installation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-black p-6 font-mono text-sm text-green-400 dark:bg-zinc-950">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">$</span>
                  <span>bun install</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-gray-500">$</span>
                  <span>bun dev</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/30 mt-8 flex items-start gap-4 rounded-lg border p-4">
            <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-green-500" />
            <div>
              <p className="font-medium">Ready to go!</p>
              <p className="text-muted-foreground text-sm">
                Your development server will be running at{' '}
                <code className="bg-muted rounded px-1.5 py-0.5">
                  http://localhost:5173
                </code>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <AppLogoIcon className="size-5" />
                <span className="font-bold">React Starter Kit</span>
              </div>
              <p className="text-muted-foreground text-sm">
                A modern React starter kit with the best tools and practices.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://tanstack.com/router"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    TanStack Router
                  </a>
                </li>
                <li>
                  <a
                    href="https://tanstack.com/query"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    TanStack Query
                  </a>
                </li>
                <li>
                  <a
                    href="https://tanstack.com/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    TanStack Form
                  </a>
                </li>
                <li>
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    shadcn/ui
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/jhsebas741/react-starter-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>© 2025 React Starter Kit. Built with ❤️ using modern tools.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
