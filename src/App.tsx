import './App.css';
import 'flowbite';
import { useNavigate, RouteDefinition, useRoutes } from '@solidjs/router';
import Home from './components/home';
import Timeline from './components/experience';

const BaseRedirect = () => {
  const navigate = useNavigate();
  navigate('/home', { replace: true });
  return <></>;
};

const routes: RouteDefinition[] = [
  { path: '/', component: BaseRedirect },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/experience',
    component: Timeline,
  },
];

function App() {
  const Routes = useRoutes(routes);
  return <Routes />;
}

export default App;
