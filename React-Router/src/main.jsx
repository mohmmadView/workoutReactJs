import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root , { loader as rootLoader,
  action as rootAction} from "./routes/root";
import ErrorPage from "./error-page";
import "./App.css";
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,    
    loader: rootLoader,
        action: rootAction,

  children: [
    {
    path: "contacts/:contactId",
    element: <Contact />,
    status: 404,
  },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
