import 'styles/index.scss'

import Layout from 'components/Layout'
import DetailPage from 'pages/DetailPage'
import IssueListPage from 'pages/IssueListPage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout title="React" />} path="/">
      <Route element={<IssueListPage />} path="" />
      <Route element={<DetailPage />} path="detail/:issueNumber" />
    </Route>,
  ),
)

const App = () => <RouterProvider router={router} />

export default App
