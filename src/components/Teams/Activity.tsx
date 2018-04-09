import * as React from 'react';
import * as moment from 'moment';
import { IActivity, ActivityType } from '../../interfaces';

export interface ActivityProps {
    activity:IActivity
};
export interface ActivityState {};

class Activity extends React.Component<ActivityProps, ActivityState> {
    activityType
    public render(): JSX.Element {
        if(this.props.activity.Type == ActivityType.YouViewedActivity)
        {
            this.activityType =" viewed "
        }
        if(this.props.activity.Type == ActivityType.YouModifiedActivity)
        {
            this.activityType =" modified "
        }
        return (<div className="activity">
         You {this.activityType} <a href={this.props.activity.ActivityItem.Url}>{this.props.activity.ActivityItem.Title}</a> on {moment(this.props.activity.Time).format("ll")}.   
        </div>);
    }
}

export default Activity;
