import * as React from 'react';
import {autobind} from 'office-ui-fabric-react';
import styles from '../Styles/main.module.scss';
import Flyout from './../Flyout';
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
    public render(): JSX.Element {
        return (<div className={styles.wrapper}>
          <div className={styles.toplevelmenu}>
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"Home"})}}>Home</div>
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"ITA"})}} style={{backgroundColor:this.state.currentMenu =="ITA" ? "#eee":"#ddd"}}>ITA</div>
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"Offices"})}} style={{backgroundColor:this.state.currentMenu =="Offices" ? "#eee":"#ddd"}}>Offices</div>
            <div className={styles.menutext} onMouseOver={()=>{this.setState({currentMenu:"Teams"})}}>Teams</div>
            <div className={styles.menutext}>Forms</div>
            <div className={styles.menutext}>Training</div>
         </div>
         {this.state.currentMenu != "Home" && <Flyout selectedMenu={this.state.currentMenu} onMouseOut={()=>{this.handleMouseOut()}} />}          
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
        this.setState({currentMenu:"Home"});
    }
}

export default GlobalMenu;
