import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(protected)/about"!</div>
}
