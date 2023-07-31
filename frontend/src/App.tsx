import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Footer, MenuBar, NavBar } from './components';
import './styles/global.scss';

import { Home, Projects } from './pages';


const App = () => {
  const Layout = () => {
    return (
      <div className='main'>
        <NavBar/>
        <div className="container">
          <div className="menuContainer">
            <MenuBar/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path; '/',
          element: <Home/>
        },
        {
          path; '/projects',
          element: <Projects/>
        },
      ]
    }
  ])


  return <RouterProvider router={router} />;
}

export default App
