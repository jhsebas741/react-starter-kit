import type { BreadcrumbItem } from '@/types/nav'
import { Breadcrumbs } from './breadcrumbs'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import { SidebarTrigger } from './ui/sidebar'

export default function Header({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbItem[]
}) {
  return (
    <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  )
}
