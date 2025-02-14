
import Projects from '../Screens/Projects/Projects';
import EditProject from '../Overlays/EditProject/EditProject';
import NotFound from '../Screens/NotFound/NotFound';
import Home from '../Screens/HomePage/HomePage';

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
      path: "*", 
      element: NotFound,
    },
  ];