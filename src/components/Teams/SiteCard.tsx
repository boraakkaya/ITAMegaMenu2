import * as React from 'react';
import { ISiteItem, IActivity } from '../../interfaces';
import Activity from './Activity';

export interface SiteCardProps {
    siteItem:ISiteItem,
    relatedActivities:Array<IActivity>
};
export interface SiteCardState {};

class SiteCard extends React.Component<SiteCardProps, SiteCardState> {
    public render(): JSX.Element {
        return (<div className="sitecard">            
            <div className="banner" style={{backgroundColor:this.props.siteItem.BannerColor}}></div>
            <div className="header" style={{backgroundColor:this.props.siteItem.BannerColor}}>{this.props.siteItem.Acronym}</div>
            <div className="sitebox">
            <a href={this.props.siteItem.Url}>{this.props.siteItem.Title}</a>
            </div>
            <div className="activitybox">
            {this.props.relatedActivities.map((activity,index)=>{
                return <Activity activity={activity} />

            })}
            </div>

        </div>);
    }
}

export default SiteCard;
