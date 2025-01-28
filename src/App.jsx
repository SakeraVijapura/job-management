import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routers from './router';
import './App.css';

const App = () => {
  return <RouterProvider router={routers} />;
}

export default App
