import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import WinsList from './components/WinsList.tsx'
import WinForm from './components/WinForm.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<WinsList />} />
    <Route path="/addWin" element={<WinForm/>}/>
  </Route>,
)
