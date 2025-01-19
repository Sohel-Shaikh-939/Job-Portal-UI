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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </StrictMode>
);
