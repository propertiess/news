import { RouteComponentProps } from 'react-router-dom';

export interface IRoute {
  path: string;
  component:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, any, unknown>>
    | undefined;
}
