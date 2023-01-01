import { createBrowserRouter } from "react-router-dom";
import Landing from "../Components/Landing";
import Information from "../Components/Information";
import Company from "../Components/AboutSections/Company";
import Developer from "../Components/AboutSections/Developer";
import Resources from "../Components/AboutSections/Resources";

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
  {
    path: "/Developer",
    element: <Developer />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

export default router;
