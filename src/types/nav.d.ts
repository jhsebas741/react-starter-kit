import type { LinkProps } from '@tanstack/react-router'

export interface BreadcrumbItem {
  title: string
  linkOptions?: LinkProps
}

export interface NavGroup {
  title: string
  icon?: LucideIcon
  isActive?: boolean
  items: NavItem[]
}

export interface NavItem {
  title: string
  linkOptions: LinkProps
  icon?: LucideIcon | null
  isActive?: boolean
}
