import * as React from 'react';
import {autobind} from 'office-ui-fabric-react';
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
    handleSharePointHomeLoaded()
    {
        //localStorage["ms-oil-datasource-RecentSites"] = sessionStorage["ms-oil-datasource-RecentSites"];
        localStorage["globalNavigationLoggedInUser"] = `{RecentSites:${JSON.parse(sessionStorage["ms-oil-datasource-RecentSites"]).Acronyms._value},Suggested:${JSON.parse(sessionStorage["ms-oil-datasource-Suggested"]).Acronyms._value},FavoriteFeed:${JSON.parse(sessionStorage["ms-oil-datasource-FavoriteFeed"]).Acronyms._value}}`;        
        //ms-oil-datasource-RecentSites
        //ms-oil-datasource-Suggested
        //ms-oil-datasource-FavoriteFeed
        console.log("User : ",JSON.parse(localStorage["globalNavigationLoggedInUser"]));
    }
    public render(): JSX.Element {
        return (<div className={styles.wrapper}>
        {localStorage["globalNavigationLoggedInUser"] == undefined && <iframe src="https://itadev.sharepoint.com/_layouts/15/sharepoint.aspx" onLoad={()=>{this.handleSharePointHomeLoaded()}} /> }
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
