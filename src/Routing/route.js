import { createBrowserRouter } from "react-router-dom";
import Landing from "../Components/Landing";
import Information from "../Components/Information";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/information",
    element: <Information />,
  },
]);

export default router;
