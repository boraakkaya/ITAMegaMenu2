import * as React from 'react';
import {autobind} from 'office-ui-fabric-react';
import Home from './../Home';
import ITA from './../ITA';
import Offices from './../Offices';
import Teams from './../Teams';
import styles from '../Styles/main.module.scss';
export interface FlyoutProps {
    selectedMenu:string;
    onMouseOut:()=>any;
};
export interface FlyoutState {};
class Flyout extends React.Component<FlyoutProps, FlyoutState> {
    public render(): JSX.Element {
        return (<div className={`${styles.flyout}`}   onMouseLeave={()=>{this.props.onMouseOut()}} >
                {this.props.selectedMenu == "ITA" && <ITA />}                
                {this.props.selectedMenu == "Offices" && <Offices />}
                {this.props.selectedMenu == "Teams" && <Teams />}
            </div>);
    }
}

export default Flyout;
