
import './App.css';
import { useNavigate, RouteDefinition, useRoutes } from '@solidjs/router';
import Home from './components/home';

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
];

function App() {
  const Routes = useRoutes(routes);
  return <Routes />;
}

export default App;
