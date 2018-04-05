import * as React from 'react';

export interface MyTeamsProps {};
export interface MyTeamsState {};

class MyTeams extends React.Component<MyTeamsProps, MyTeamsState> {
    public render(): JSX.Element {
        return (<div>MyTeams</div>);
    }
}
export default MyTeams;
