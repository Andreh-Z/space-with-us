import { createBrowserRouter } from "react-router-dom";
import Landing from "../Components/Landing";
import Information from "../Components/Information";
import Company from "../Components/AboutSections/Company";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/information",
    element: <Information />,
  },
  {
    path: "/About",
    element: <Company />,
  },
]);

export default router;
