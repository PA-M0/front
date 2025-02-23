
import Projects from '../Screens/Projects/Projects';
import EditProject from '../Overlays/EditProject/EditProject';
import NotFound from '../Screens/NotFound/NotFound';
import Home from '../Screens/HomePage/HomePage';
import Employees from '../Screens/Roles/Employees';
import Services from '../Screens/Services/Services';
import Contacts from '../Screens/Contact/Contact';
import Customer from '../Screens/Customer/Customer';

export const routes = [
    {
      path: "/",
      element: Home,
      exact: true,
    },  
    {
      path: "/projects",
      element: Projects,
      exact: true,
    },
    {
      path: "/edit/:id",
      element: EditProject,
      exact: true,
    },
    {
      path: "/employees",
      element: Employees,
      exact: true,
    },
    {
      path: "/services",
      element: Services,
      exact: true,
    },
    {
      path: "/contacts",
      element: Contacts,
      exact: true,
    },
    {
      path: "/customer",
      element: Customer,
      exact: true,
    },
    {
      path: "*", 
      element: NotFound,
    }
  ];