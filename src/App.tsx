import 'styles/index.scss'

import Layout from 'components/Layout'
import LoadingSpinner from 'components/LoadingSpinner'
import React, { Suspense } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

const IssueListPage = React.lazy(() => import('pages/IssueListPage'))
const DetailPage = React.lazy(() => import('pages/DetailPage'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout title="React" />} path="/">
      <Route element={<IssueListPage />} path="" />
      <Route element={<DetailPage />} path="detail/:issueNumber" />
    </Route>,
  ),
)

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <RouterProvider router={router} />
  </Suspense>
)

export default App
