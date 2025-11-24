'use client'

import { LayoutGridIcon } from 'lucide-react'
import * as React from 'react'

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
import type { NavGroup, NavItem } from '@/types/nav'
import { Link } from '@tanstack/react-router'
import AppLogo from './app-logo'

const navMain: (NavGroup | NavItem)[] = [
  {
    title: 'Dashboard',
    icon: LayoutGridIcon,
    linkOptions: {
      to: '/dashboard',
    },
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, logout } = useAuth()
  if (!user) return null
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link to="/">
              <AppLogo />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} onLogout={logout} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
