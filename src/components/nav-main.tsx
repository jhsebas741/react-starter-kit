import { ChevronRight } from 'lucide-react'
import { memo } from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import type { NavGroup, NavItem } from '@/types/nav'
import { Link } from '@tanstack/react-router'

interface NavMainProps {
  items: (NavGroup | NavItem)[]
  activeRoutes: Set<string>
}

function arePropsEqual(prevProps: NavMainProps, nextProps: NavMainProps) {
  if (prevProps.items !== nextProps.items) return false

  if (prevProps.activeRoutes.size !== nextProps.activeRoutes.size) return false

  for (const route of prevProps.activeRoutes) {
    if (!nextProps.activeRoutes.has(route)) return false
  }

  return true
}

export const NavMain = memo(function NavMain({
  items,
  activeRoutes,
}: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          if ('items' in item) {
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            isActive={activeRoutes.has(
                              subItem.linkOptions.to ?? '',
                            )}
                            asChild
                          >
                            <Link {...subItem.linkOptions}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )
          } else {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={activeRoutes.has(item.linkOptions.to ?? '')}
                  asChild
                >
                  <Link {...item.linkOptions}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}, arePropsEqual)
