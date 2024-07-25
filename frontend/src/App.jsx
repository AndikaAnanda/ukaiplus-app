import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import TryoutsPage from './pages/TryoutsPage';
import TryoutDetailPage from './pages/TryoutDetailPage';
import DiscussionPage from './pages/DiscussionPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage/>} />
      <Route path='dashboard' element={<MainLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='tryout' element={<TryoutsPage/>}/>
        <Route path='discussion' element={<DiscussionPage/>}/>
        <Route path='tryout/:tryoutId' element={<TryoutDetailPage/>} />
      </Route>
    </>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
