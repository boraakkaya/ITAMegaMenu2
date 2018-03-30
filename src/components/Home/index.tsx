import * as React from 'react';
import styles from './../Styles/main.module.scss';

export interface HomeProps {};
export interface HomeState {};

class Home extends React.Component<HomeProps, HomeState> {
    public render(): JSX.Element {
        return (<div className={styles.toplevelmenu}>
                <div className={styles.menutext}>Home</div>
            </div>);
    }
}

export default Home;
