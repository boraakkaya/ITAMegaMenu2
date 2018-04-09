import * as React from 'react';
import { ISiteItem } from '../../interfaces';
import SiteCard from './SiteCard';
import { shallowCompare } from '@uifabric/utilities';



export interface RecentSitesProps {};
export interface RecentSitesState {};

class RecentSites extends React.Component<RecentSitesProps, RecentSitesState> {
    recentSites:Array<ISiteItem>
    activities:Array<any>
    constructor(props)
    {
        super(props);
        if(localStorage["globalNavigationLoggedInUser"] != null)
        { 
            var cacheDataJSON = JSON.parse(localStorage["globalNavigationLoggedInUser"]);
            this.recentSites =  JSON.parse(cacheDataJSON.data["SPHomeWeb:sites/recent"].cacheValue).Items;
            this.activities = JSON.parse(cacheDataJSON.data["SPHomeWeb:activities"].cacheValue).Activities;
        }
    }
    public render(): JSX.Element {
        console.log("ThisRecentSites ", this.recentSites);
        return (<div style={{display:"inline-block"}} >
            <h1>RECENTLY VISITED</h1>
             {this.recentSites.length > 0 && this.recentSites.map((item,index)=>{
                 console.log("Activities = ", this.activities);
                 console.log("Item : ", item);
                 var itemRelatedActivities=[];
                 itemRelatedActivities = this.activities.filter((a,i)=>{
                     console.log(a.ParentReference,  " is equal  ", item.ItemReference);
                     console.log(shallowCompare(a.ParentReference, item.ItemReference));
                     return shallowCompare(a.ParentReference, item.ItemReference);                                          
                 });
                 console.log("Item Related Activities", itemRelatedActivities);
                 return <SiteCard siteItem={item} relatedActivities={itemRelatedActivities} />
             })}
             {this.recentSites.length < 1 && <p>No recently visited sites found..</p>}

        </div>);
    }
}
export default RecentSites;
