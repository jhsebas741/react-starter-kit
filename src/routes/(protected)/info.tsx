import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/info')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(protected)/test"!</div>
}
