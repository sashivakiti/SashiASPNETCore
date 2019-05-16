import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>JD AU Dashboard</h1>
            <p><u>Tasks:</u></p>
           
        </div>;
    }
}
