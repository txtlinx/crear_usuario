import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { applicationPaths } from './path';
import Home from '../components/pages/Home';
import Transfers from '../components/pages/Transfers';
import MasterTemplate from '../components/templates/MasterTemplate';
import Signings from '../components/pages/Signings';


const { basePath, home, transfers, signing } = applicationPaths;

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={home} element={<MasterTemplate />}>
      <Route index path={home} element={<Home />} />
      <Route path={transfers} element={<Transfers />} />
      <Route path={signing} element={<Signings />} />
      {/* Temporal not found route */}
      <Route path="*" element={<Home />} />
    </Route>
  ),
  { basename: process.env.NODE_ENV === 'test' ? '/' : basePath }
);

export default Routes;
