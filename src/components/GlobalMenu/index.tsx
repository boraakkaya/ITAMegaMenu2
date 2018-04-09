import * as React from 'react';
import {autobind} from 'office-ui-fabric-react';
import * as moment from 'moment';
import styles from '../Styles/main.module.scss';
import Flyout from './../Flyout';
import {MockOffices} from './../../data/mock';
import NavigationSectionBox from '../NavigationSectionBox';
export interface GlobalMenuProps {    
};
export interface GlobalMenuState {
    currentMenu:string;
};

class GlobalMenu extends React.Component<GlobalMenuProps, GlobalMenuState> {        
    constructor(props)
    {
        super(props);
        this.state = {currentMenu:"Home"};
    }
    handleSharePointHomeLoaded(target)
    {
        console.log("RecentSites : ",sessionStorage["ms-oil-datasource-RecentSites"]);
        var recentSites = JSON.parse(sessionStorage["ms-oil-datasource-RecentSites"]);
        var recentSitesData = recentSites[Object.keys(recentSites)[0]];
        console.log(recentSitesData);

        console.log("Suggested Sites : ",sessionStorage["ms-oil-datasource-Suggested"]);
        var suggestedSites = JSON.parse(sessionStorage["ms-oil-datasource-Suggested"]);
        var suggestedSitesData = suggestedSites[Object.keys(suggestedSites)[0]];
        console.log(suggestedSitesData);

        console.log("FavoriteFeed : ",sessionStorage["ms-oil-datasource-FavoriteFeed"]);
        var favoriteFeed = JSON.parse(sessionStorage["ms-oil-datasource-FavoriteFeed"]);
        var favoriteFeedData = favoriteFeed[Object.keys(favoriteFeed)[0]]._value;
        console.log(favoriteFeedData);

       var globalNavigationLoggedInUser  = {"recentSites":recentSitesData,"suggestedSites": suggestedSitesData,"favoriteFeed":favoriteFeedData};

        //Use below instead since it provides more information related to user
        
        var _spHomePageDataCache = target.contentWindow._spHomePageDataCache; // Global window object retrieved from Layouts/Sharepoint.aspx page
        var _spHomeServiceContext = target.contentWindow._spHomeServiceContext;
        var expires = moment().add(45,'m');
        var cacheData = {"data":_spHomePageDataCache,"expires": expires,"_spHomeServiceContext":_spHomeServiceContext, "favoriteFeedData":favoriteFeedData};
        localStorage["globalNavigationLoggedInUser"] =JSON.stringify(cacheData);
        
        console.log("_spHomePageDataCache", JSON.parse(localStorage["globalNavigationLoggedInUser"]));

        //  use cacheData after parsed as below sample
         var cacheDataJSON = JSON.parse(localStorage["globalNavigationLoggedInUser"]);
         console.log("All Activities Value :", JSON.parse(cacheDataJSON.data["SPHomeWeb:activities"].cacheValue));
         console.log("All Sites Value :", JSON.parse(cacheDataJSON.data["SPHomeWeb:sites/feed"].cacheValue));
         console.log("Recent Sites Value :", JSON.parse(cacheDataJSON.data["SPHomeWeb:sites/recent"].cacheValue));
         console.log("Suggested Sites Value :", JSON.parse(cacheDataJSON.data["SPHomeWeb:sites/suggested"].cacheValue));
    }
    public render(): JSX.Element {
        var y = moment();
        var x = moment();
        var hasExpired = false;        
        if(localStorage["globalNavigationLoggedInUser"]!=undefined)
        {
            y = moment(JSON.parse(localStorage["globalNavigationLoggedInUser"]).expires);
            hasExpired = x.valueOf() > y.valueOf() ? true : false;
        }
        console.log("Has Exoied ? : ", hasExpired);

  var duration = moment.duration(x.diff(y))
        return (<div className={styles.wrapper}>
        {localStorage["globalNavigationLoggedInUser"] == undefined && <iframe src="https://itadev.sharepoint.com/_layouts/15/sharepoint.aspx" onLoad={(e)=>{this.handleSharePointHomeLoaded(e.currentTarget)}} /> }

        {localStorage["globalNavigationLoggedInUser"] != undefined && hasExpired && <iframe src="https://itadev.sharepoint.com/_layouts/15/sharepoint.aspx" onLoad={(e)=>{this.handleSharePointHomeLoaded(e.currentTarget)}} /> }

          <div className={styles.toplevelmenu}>
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"Home"})}}>Home</div>            
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"Offices"})}} style={{backgroundColor:this.state.currentMenu =="Offices" ? "#eee":"#ddd"}}>Offices</div>
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"ITA"})}} style={{backgroundColor:this.state.currentMenu =="ITA" ? "#eee":"#ddd"}}>ITA</div>
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"Teams"})}}>Teams</div>
            <div className={styles.menutext}>Forms</div>
            <div className={styles.menutext}>Training</div>
         </div>
         {this.state.currentMenu != "Home" && this.state.currentMenu != "Offices" && <Flyout selectedMenu={this.state.currentMenu} onMouseOut={()=>{this.handleMouseOut()}} />}
         {this.state.currentMenu != "Home" && this.state.currentMenu == "Offices" && <div style={{position:"absolute", left:"90px", width:"auto", backgroundColor:"#eee", zIndex:9999}}><NavigationSectionBox items={MockOffices} /></div>}         
        </div>);
    }
    @autobind
    handleMouseOver(menuText)
    {
        console.log("ONMOUSE OVERRRRR", menuText);
        this.setState({currentMenu:menuText});
    }
    @autobind
    handleMouseOut()
    {
        console.log("ONMOUSE OUTTTT");
        //this.setState({currentMenu:"Home"});
    }
}

export default GlobalMenu;
