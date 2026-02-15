import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './routes/App'
import Home from "./routes/Home/Home"
import Jobs from './routes/Jobs/Jobs'
import Job from './routes/Job/Job'
import CandidateLoginDetails from './routes/CandidateLoginDetails/CandidateLoginDetails'
import CandidateProfile from './routes/CandidateProfile/CandidateProfile'
import EmployerLoginDetails from './routes/EmployerLoginDetails/EmployerLoginDetails'
import Employer from './routes/Employer/Employer'
import store from './store'
import EmployerJobsList from './routes/EmployerJobsList/EmployerJobsList'
import EmployerCandidates from './routes/EmployerCandidates/EmployerCandidates'
import EmployerInterested from './routes/EmployerInterested/EmployerInterested'
import JobPost from './routes/JobPost/JobPost'
import EmployerProfile from './routes/EmployerProfile/EmployerProfile'
import BookMarks from './routes/BookMarks/BookMarks'
import Companies from './routes/Companies/Companies'
import Company from './routes/Company/Company'
import MyJobs from './routes/MyJobs/MyJobs'
import Interviews from './routes/Interviews/Interviews'
import ResumeScore from './routes/ResumeScore/ResumeScore'

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
        path: "/Job",
        element: <Job />,
      },
      {
        path: "/Companies",
        element: <Companies />,
      },
      {
        path: "/Company",
        element: <Company />,
      },
      {
        path: "/BookMarks",
        element: <BookMarks />,
      },
      {
        path: "/MyJobs",
        element: <MyJobs />,
      },
      {
        path: "/ResumeScore",
        element: <ResumeScore />,
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
            path: "/Employer/JobPost",
            element: <JobPost />,
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
          {
            path: "/Employer/Interviews",
            element: <Interviews />,
          },
          {
            path: "/Employer/Profile",
            element: <EmployerProfile />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </Provider>
  // </StrictMode>
);
