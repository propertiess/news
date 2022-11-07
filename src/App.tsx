import { Route, Switch } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { NotFound } from './pages';
import { routes } from './routes';

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            exact={route.path === '/' && true}
            {...route}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export { App };
