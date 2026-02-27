'use client'

import { LayoutGridIcon, MoreHorizontalIcon } from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { useAuth } from '@/hooks/use-auth'
import type { User } from '@/types/auth'
import type { NavGroup, NavItem } from '@/types/nav'
import { Link, useRouterState } from '@tanstack/react-router'
import { memo, useMemo } from 'react'
import AppLogo from './app-logo'

const navMain: (NavGroup | NavItem)[] = [
  {
    title: 'Dashboard',
    icon: LayoutGridIcon,
    linkOptions: {
      to: '/dashboard',
    },
  },
  {
    title: 'More',
    icon: MoreHorizontalIcon,
    isActive: true,
    items: [
      { title: 'About', linkOptions: { to: '/about' } },
      { title: 'Info', linkOptions: { to: '/info' } },
    ],
  },
]

const SidebarHeaderContent = memo(function SidebarHeaderContent() {
  return (
    <SidebarHeader>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link to="/">
            <AppLogo />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarHeader>
  )
})

const SidebarFooterContent = memo(function SidebarFooterContent({
  user,
  onLogout,
}: {
  user: User
  onLogout: () => void
}) {
  return (
    <SidebarFooter>
      <NavUser user={user} onLogout={onLogout} />
    </SidebarFooter>
  )
})

function SidebarMainContent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  const activeRoutes = useMemo(() => {
    const routes = new Set<string>()
    navMain.forEach((item) => {
      if ('items' in item) {
        item.items?.forEach((subItem) => {
          const to = subItem.linkOptions.to
          if (to && pathname === to) {
            routes.add(to)
          }
        })
      } else {
        const to = item.linkOptions.to
        if (to && (pathname === to || pathname.startsWith(to + '/'))) {
          routes.add(to)
        }
      }
    })
    return routes
  }, [pathname])

  return (
    <SidebarContent>
      <NavMain items={navMain} activeRoutes={activeRoutes} />
    </SidebarContent>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, logout } = useAuth()

  if (!user) return null
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeaderContent />
      <SidebarMainContent />
      <SidebarFooterContent user={user} onLogout={logout} />
      <SidebarRail />
    </Sidebar>
  )
}
