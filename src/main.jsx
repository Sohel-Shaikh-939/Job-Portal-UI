import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from "./routes/Home/Home"
import Jobs from './routes/Jobs/Jobs'
import Job from './routes/Job/Job'
import CandidateLoginDetails from './routes/CandidateLoginDetails/CandidateLoginDetails'
import CandidateProfile from './routes/CandidateProfile/CandidateProfile'
import EmployerLoginDetails from './routes/EmployerLoginDetails/EmployerLoginDetails'
import Employer from './routes/Employer/Employer'
import { Provider } from 'react-redux'
import store from './store'
import EmployerJobsList from './routes/EmployerJobsList/EmployerJobsList'
import EmployerCandidates from './routes/EmployerCandidates/EmployerCandidates'
import EmployerInterested from './routes/EmployerInterested/EmployerInterested'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Jobs",
        element: <Jobs />,
      },
      {
        path: "/Job/:id",
        element: <Job />,
      },
      {
        path: "/CandidateLogin",
        element: <CandidateLoginDetails />,
      },
      {
        path: "/CandidateProfile",
        element: <CandidateProfile />,
      },
      {
        path: "/EmployerLogin",
        element: <EmployerLoginDetails />,
      },
      {
        path: "/Employer",
        element: <Employer />,
        children: [
          {
            path: "/Employer/",
            element: <EmployerJobsList />,
          },
          {
            path: "/Employer/EmployerJobsList",
            element: <EmployerJobsList />,
          },
          {
            path: "/Employer/EmployerCandidates",
            element: <EmployerCandidates />,
          },
          {
            path: "/Employer/EmployerInterested",
            element: <EmployerInterested />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
