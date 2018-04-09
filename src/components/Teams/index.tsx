import * as React from 'react';
import RecentSites from './RecentSites';
import FollowingSites from './FollowingSites';

export interface TeamsProps {};
export interface TeamsState {};

class Teams extends React.Component<TeamsProps, TeamsState> {
    public render(): JSX.Element {
        return (<div>
            <div className="ms-Grid">
                <div className="ms-Grid-row" >
                    <div className={`ms-Grid-col ms-sm12 ms-lg12`}>                    
                    <RecentSites />
                    <FollowingSites />
                    </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Teams;
