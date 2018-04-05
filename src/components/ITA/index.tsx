import * as React from 'react';
import styles from './../Styles/main.module.scss';
export interface ITAProps {
};
export interface ITAState { };
class ITA extends React.Component<ITAProps, ITAState> {
    public render(): JSX.Element {
        return (<div>
            <div className="ms-Grid">
                <div className="ms-Grid-row" >
                    <div className={`ms-Grid-col ms-sm12 ms-lg4`}>
                    <h1>USEFUL LINKS</h1>
                    <div className="ms-Grid-row" >
                    <div className={`ms-Grid-col ms-sm12 ms-lg6 ${styles.menuitems}`}>                    
                        <ul>
                            <li><a href="">Wikita</a></li>
                            <li><a href="">ITA Directory</a></li>
                            <li><a href="">Technical Support</a></li>
                            <li><a href="">CDP</a></li>
                            <li><a href="">Salesforce</a></li>
                            <li><a href="">Travel</a></li>
                        </ul>
                        </div>
                        <div className={`ms-Grid-col ms-sm12 ms-lg6 ${styles.menuitems}`}>
                        <ul>
                            <li><a href="">WebTA</a></li>
                            <li><a href="">ITA Jobs on USA Jobs</a></li>
                            <li><a href="">OCFAO Broadcasts</a></li>
                            <li><a href="">Export.gov Content Change Request</a></li>
                        </ul>
                        <h4>Top Markets Reports</h4>
                        <img src="https://www.trade.gov/topmarkets/images/top-markets-web-header-new.png" width="150px" />

                        </div>
                        </div>
                    </div>
                    <div className={`ms-Grid-col ms-sm12 ms-lg4 ${styles.menuitems}`}>
                    <h1>PRESS RELEASES</h1>
                        <table>
                            <tr>
                                <td>
                                Initiation of AD and CVD Investigations of Imports of Laminated Woven Sacks...
                                </td>
                            </tr>
                            <tr>
                                <td><hr/></td>
                            </tr>
                            <tr>
                                <td>
                                Affirmative Final Determination in the Antidumping Duty (AD) Investigations of Imports...
                                </td>
                            </tr>
                            <tr>
                                <td><hr/></td>
                            </tr>
                            <tr>
                                <td>
                                Determinations in the Antidumping Duty (AD) Investigations of Imports of Stainless Steel...
                                </td>
                            </tr>
                            <tr>
                                <td><hr/></td>
                            </tr>
                            <tr>
                                <td>
                                Determination of the Countervailing Duty Investigation of Imports of Forged Steel Fittings from China...
                                </td>
                            </tr>
                            <tr>
                                <td><hr/></td>
                            </tr>
                        </table>
                    </div>
                    <div className="ms-Grid-col ms-sm12 ms-lg4">
                    <h1>LATEST NEWS</h1>
                        <table className={styles.tblcontent}>
                            <tr>
                                <td><img width="120px" src="https://spoprod-a.akamaihd.net/files/sp-client-prod_2018-03-23.011/icon_helpitemimg1_c0dba21d.png" /></td>
                                <td>
                                <h4>Keep your team updated with News on your team site</h4>
                                <p>From the new team site home page you'll be able to… </p>
                                <em>SharePoint Apr 2, 2018</em>
                                </td>
                            </tr>
                            <tr><td colSpan={2}><hr/></td></tr>
                            <tr>
                                <td><img width="120px" src="https://spoprod-a.akamaihd.net/files/sp-client-prod_2018-03-23.011/icon_helpitemimg2_4dca3af9.png" /></td>
                                <td>
                                <h4>What is a team site?</h4>
                                <p>A SharePoint team site connects you and your team to the content, information, and apps you rely on every… </p>
                                <em>SharePoint Apr 1, 2018</em>
                                </td>
                            </tr>
                            <tr><td colSpan={2}><hr/></td></tr>
                            <tr>
                                <td><img width="120px" src="https://spoprod-a.akamaihd.net/files/sp-client-prod_2018-03-23.011/icon_helpitemimg3_7f442b60.png" /></td>
                                <td>
                                <h4>Adding a page to a site</h4>
                                <p>Using pages is a great way to share ideas using images, Excel, Word and PowerPoint documents, vide… </p>
                                <em>SharePoint Apr 2, 2018</em>
                                </td>
                            </tr>
                        </table>
                        
                        </div>

                        </div>
                    </div>
                </div>);
            }
        }
        export default ITA;
