import * as React from 'react';
import SiteCard from './SiteCard';
import { shallowCompare } from '@uifabric/utilities';
import { ISiteItem } from '../../interfaces';

export interface FollowingSitesProps {};
export interface FollowingSitesState {};

class FollowingSites extends React.Component<FollowingSitesProps, FollowingSitesState> {
    followedSites;
    activities:Array<any>
    constructor(props)
    {
        super(props);
        if(localStorage["globalNavigationLoggedInUser"]!=null)
        {
            
            var cacheDataJSON = JSON.parse(localStorage["globalNavigationLoggedInUser"]);            
            this.followedSites = cacheDataJSON.favoriteFeedData;
            this.activities = JSON.parse(cacheDataJSON.data["SPHomeWeb:activities"].cacheValue).Activities;
        }        
        else
        {
            this.followedSites =[];
        }
    }
    public render(): JSX.Element {
        console.log(this.followedSites);
        return (<div  style={{display:"inline-block"}}>
            <h1>FOLLOWING </h1>
            {this.followedSites.map((item,index)=>{
                var itemRelatedActivities=[];
                itemRelatedActivities = this.activities.filter((a,i)=>{
                    return shallowCompare(a.ParentReference.WebId, item.itemReference.webId);                                          
                });
                var cardItem:ISiteItem = {Acronym:item.acronym, BannerColor:item.bannerColor,Title:item.title,ItemReference:item.itemReference,Url:item.url, OriginalUrl:item.originalUrl,Type:item.type,WebTemplate:undefined}
                return <SiteCard siteItem={cardItem} relatedActivities={itemRelatedActivities} /> 
            })}
        </div>);
    }    
}

export default FollowingSites;
