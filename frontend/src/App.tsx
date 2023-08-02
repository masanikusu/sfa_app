import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MenuBar } from './components';
import './styles/global.scss';
import {
  Activities,
  Clients,
  Home,
  Inquiry,
  Login,
  Projects,
  Support,
} from './pages';

const App = () => {
  const Layout = () => {
    return (
      <div className='main'>
        {/* <NavBar/> */}
        <div className='container'>
          <div className='menuContainer'>
            <MenuBar />
          </div>
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
          path: '/inquiry',
          element: <Inquiry />,
        },
        {
          path: '/support',
          element: <Support />,
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
