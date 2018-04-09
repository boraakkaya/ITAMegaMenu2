import * as React from 'react';
import { ISiteItem } from '../../interfaces';
import SiteCard from './SiteCard';



export interface RecentSitesProps {};
export interface RecentSitesState {};

class RecentSites extends React.Component<RecentSitesProps, RecentSitesState> {
    recentSites:Array<ISiteItem>
    constructor(props)
    {
        super(props);
        if(localStorage["globalNavigationLoggedInUser"] != null)
        { 
            var cacheDataJSON = JSON.parse(localStorage["globalNavigationLoggedInUser"]);
            this.recentSites =  JSON.parse(cacheDataJSON.data["SPHomeWeb:sites/recent"].cacheValue).Items;
        }
    }
    public render(): JSX.Element {
        console.log("ThisRecentSites ", this.recentSites);
        return (<div>
            <h1>RECENTLY VISITED</h1>
             {this.recentSites.length > 0 && this.recentSites.map((item,index)=>{
                 return <SiteCard siteItem={item} />
             })}
             {this.recentSites.length < 1 && <p>No recently visited sites found..</p>}

        </div>);
    }
}
export default RecentSites;
