# React Starter Kit

A modern, production-ready React starter kit built with the latest technologies and best practices. Get up and running in minutes with type-safe routing, powerful state management, and beautiful UI components.

## ✨ Features

### 🚀 **TanStack Router**

Type-safe routing with automatic code splitting and data loading. Navigate with confidence using fully typed routes and parameters.

### 📊 **TanStack Query**

Powerful server state management with automatic caching, background updates, and synchronization. Say goodbye to manual data fetching logic.

### 📝 **TanStack Form**

Headless form validation with excellent TypeScript support. Build complex forms with ease and type safety.

### 🎨 **shadcn/ui**

Beautiful, accessible components built with Radix UI and Tailwind CSS. Fully customizable and ready to use.

### 🔒 **Authentication**

Pre-configured authentication system with protected routes, login/register pages, and user management.

### 🌓 **Dark Mode**

Built-in dark mode support with `next-themes`. Seamlessly switch between light and dark themes.

### 📱 **Responsive Design**

Mobile-first design that looks great on all devices. From phones to desktops.

### ⚡ **Vite**

Lightning-fast development with Hot Module Replacement (HMR) and optimized production builds.

## 🛠️ Tech Stack

- **React 19** - Latest React with improved performance
- **TypeScript** - Full type safety across the entire application
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS v4** - Utility-first CSS framework
- **TanStack Router** - Type-safe routing
- **TanStack Query** - Server state management
- **TanStack Form** - Form validation
- **shadcn/ui** - UI component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Zustand** - Lightweight state management
- **Sonner** - Toast notifications
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Installation

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/react-starter-kit.git
cd react-starter-kit

# Install dependencies
bun install

# Start development server
bun dev
```

Your app will be running at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint
```

## 📁 Project Structure

```
react-starter-kit/
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Custom components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── providers/      # Context providers
│   ├── queries/        # TanStack Query hooks
│   ├── routes/         # Route components
│   │   ├── (auth)/    # Authentication routes
│   │   ├── (protected)/ # Protected routes
│   │   └── index.tsx  # Landing page
│   ├── stores/         # Zustand stores
│   ├── types/          # TypeScript types
│   ├── main.tsx        # App entry point
│   └── styles.css      # Global styles
├── public/             # Public assets
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Key Concepts

### Type-Safe Routing

Routes are automatically generated and fully typed:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return <div>Welcome to your dashboard!</div>
}
```

### Server State Management

Use TanStack Query for data fetching:

```tsx
import { useQuery } from '@tanstack/react-query'

function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <div>Loading...</div>
  return <div>{/* Render users */}</div>
}
```

### Form Validation

Build forms with TanStack Form:

```tsx
import { useForm } from '@tanstack/react-form'

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      // Handle form submission
    },
  })

  return <form>{/* Form fields */}</form>
}
```

## 🎨 UI Components

This starter kit includes a comprehensive set of UI components from shadcn/ui:

- **Button** - Various button styles and sizes
- **Card** - Content containers
- **Input** - Form inputs
- **Badge** - Status indicators
- **Separator** - Visual dividers
- **Tooltip** - Contextual information
- **Dropdown Menu** - Action menus
- **Avatar** - User avatars
- **Checkbox** - Selection controls
- **And more...**

All components are fully customizable and accessible.

## 🔐 Authentication

The starter kit includes a complete authentication system:

- **Login Page** - `/login`
- **Register Page** - `/register`
- **Protected Routes** - Automatic redirect for unauthenticated users
- **User Context** - Access user data anywhere in the app

### Using Authentication

```tsx
import { useAuth } from '@/hooks/use-auth'

function MyComponent() {
  const { user, login, logout } = useAuth()

  if (!user) {
    return <button onClick={login}>Log In</button>
  }

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}
```

## 🌓 Dark Mode

Toggle between light and dark themes:

```tsx
import { ModeToggle } from '@/components/mode-toggle'

function Header() {
  return (
    <header>
      <ModeToggle />
    </header>
  )
}
```

## 📝 Adding New Routes

1. Create a new file in `src/routes/`:

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div>About Page</div>
}
```

2. The route is automatically registered and available at `/about`

## 🎨 Customizing Styles

### Tailwind Configuration

Modify `src/styles.css` to customize your design tokens:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* Add your custom variables */
}
```

### Component Styles

All shadcn/ui components can be customized by editing the files in `src/components/ui/`.

## 🚢 Deployment

### Build for Production

```bash
bun run build
```

The optimized build will be in the `dist/` folder.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jhsebas741/react-starter-kit)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jhsebas741/react-starter-kit)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TanStack](https://tanstack.com/) - For amazing libraries
- [shadcn/ui](https://ui.shadcn.com/) - For beautiful components
- [Radix UI](https://www.radix-ui.com/) - For accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS
- [Vite](https://vitejs.dev/) - For blazing fast tooling

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using modern tools and best practices.**
