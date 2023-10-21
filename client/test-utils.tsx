import {beforeEach, expect} from 'vitest'
import {cleanup, render } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import {RouterProvider, createMemoryRouter } from 'react-router-dom'
import {routes } from './routes.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

beforeEach(cleanup)
expect.extend(matchers)



export function renderRoute(location: string) {
  const router = createMemoryRouter(routes, {initialEntries: [location],})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
}