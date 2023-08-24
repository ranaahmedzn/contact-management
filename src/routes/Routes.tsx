import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Contact from "../pages/Dashboard/Contact/Contact";
import CreateContact from "../pages/Dashboard/CreateContact/CreateContact";
import EditContact from "../pages/Dashboard/EditContact/EditContact";
import ChartsAndMaps from "../pages/Dashboard/ChartsAndMaps/ChartsAndMaps";
import RedirectRoute from "./RedirectRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RedirectRoute><Dashboard /></RedirectRoute>,
      children: [
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/contact/create-contact',
          element: <CreateContact />
        },
        {
          path: '/contact/edit-contact/:id',
          element: <EditContact />
        },
        {
          path: '/charts-maps',
          element: <ChartsAndMaps />
        },
      ]
    }
  ]);
  
  export default router;