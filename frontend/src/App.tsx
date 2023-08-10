import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NavBar } from './components';
import './styles/global.scss';
import {
  Activities,
  Clients,
  Home,
  Login,
  Products,
  Projects,
  Quotations,
  Reports,
} from './pages';


const App = () => {
  const Layout = () => {
    return (
      <div className='main'>
        <NavBar/>
        <div className='container'>
          {/* <div className='menuContainer'> */}
            {/* <MenuBar /> */}
          {/* </div> */}
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/clients',
          element: <Clients />,
        },
        {
          path: '/activities',
          element: <Activities />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/reports',
          element: <Reports />,
        },
        {
          path: '/quotations',
          element: <Quotations />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
