import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Contact from "../pages/Dashboard/Contact/Contact";
import CreateContact from "../pages/Dashboard/CreateContact/CreateContact";
import EditContact from "../pages/Dashboard/EditContact/EditContact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
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
          element: <h3>Hello bro!! <br /> This is Dashboard charts and maps</h3>
        },
      ]
    }
  ]);
  
  export default router;