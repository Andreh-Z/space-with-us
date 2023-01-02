import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingIndicator from "./LoadingIndicator";

// Usamos `lazy` para cargar cada componente de forma "perezosa" (lazy-loading)
const Landing = lazy(() => import("../Components/Landing"));
const Information = lazy(() => import("../Components/Information"));
const Company = lazy(() => import("../Components/AboutSections/Company"));
const Developer = lazy(() => import("../Components/AboutSections/Developer"));
const Resources = lazy(() => import("../Components/AboutSections/Resources"));

// Agregamos un componente `Suspense` para mostrar un indicador de carga mientras se cargan los componentes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingIndicator />}>
        <Landing />
      </Suspense>
    ),
  },
  {
    path: "/information",
    element: (
      <Suspense fallback={<LoadingIndicator />}>
        <Information />
      </Suspense>
    ),
  },
  {
    path: "/About",
    element: (
      <Suspense fallback={<LoadingIndicator />}>
        <Company />
      </Suspense>
    ),
  },
  {
    path: "/Developer",
    element: (
      <Suspense fallback={<LoadingIndicator />}>
        <Developer />
      </Suspense>
    ),
  },
  {
    path: "/resources",
    element: (
      <Suspense fallback={<LoadingIndicator />}>
        <Resources />
      </Suspense>
    ),
  },
]);

export default router;
