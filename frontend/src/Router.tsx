import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import App from "./App";
import NotFoundPage from "./components/Not-found.tsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path:"/app",
    element: <App />,
    children: [ 
        {index: true, element: <App /> },
    ]   
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);