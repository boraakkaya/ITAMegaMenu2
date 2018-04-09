import * as React from 'react';
import { ISiteItem } from '../../interfaces';

export interface SiteCardProps {
    siteItem:ISiteItem
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
            Activities
            </div>

        </div>);
    }
}

export default SiteCard;
