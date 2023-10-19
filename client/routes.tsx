import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import WinsList from './components/WinsList.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<WinsList />} />
  </Route>,
)
