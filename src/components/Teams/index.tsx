import * as React from 'react';
import MyTeams from './MyTeams';

export interface TeamsProps {};
export interface TeamsState {};

class Teams extends React.Component<TeamsProps, TeamsState> {
    public render(): JSX.Element {
        return (<div>
            <div className="ms-Grid">
                <div className="ms-Grid-row" >
                    <div className={`ms-Grid-col ms-sm12 ms-lg4`}>
                    <h1>MY TEAMS</h1>
                    <MyTeams />
                    </div>
                    <div className={`ms-Grid-col ms-sm12 ms-lg4`}>
                    <h1>KNOWLEDGE IPSUM</h1>
                    <p style={{textAlign:"justify"}}>
                    <img src="https://cdn.lynda.com/courses/618724-636474003411441288_270x480_thumb.jpg" width="150px" style={{paddingLeft:"10px", float:"right"}} />
                    Nunc velit ligula, placerat et elementum quis, fermentum ac justo. Fusce rhoncus dapibus tellus sit amet rhoncus. Integer non urna eget lorem convallis cursus sollicitudin eu lectus. Cras sed metus est. Suspendisse et volutpat magna. Phasellus consequat a nisi sed molestie. Nunc aliquam magna tellus, vel mollis mauris ultricies id. Maecenas suscipit purus et dolor tempus, scelerisque finibus nibh hendrerit. Phasellus lectus nisi, luctus feugiat est eu, consectetur tincidunt arcu. Aenean mauris dolor, ornare a mi id, rhoncus porttitor erat.                    
                   <br/><br/>
                    <img src="https://www.amass-ecsel.eu/sites/amass.drupal.pulsartecnalia.com/files/blog/Training.jpg" width="150px" style={{paddingRight:"10px", float:"left"}} />
                    Quisque porttitor feugiat dui. Morbi porttitor risus arcu, ut sollicitudin quam fermentum pulvinar. Proin placerat mauris ac est tempus vestibulum. Ut sit amet interdum quam, sed imperdiet eros. Duis at lobortis dui. Quisque quis sodales nisl. Mauris dictum placerat tellus eu suscipit. Morbi porta, erat vitae fermentum blandit, lorem orci facilisis arcu, sed vestibulum lectus tellus et tortor. Sed fermentum aliquet elit a dapibus.  Ut sit amet interdum quam, sed imperdiet eros. Duis at lobortis dui. Quisque quis sodales nisl. Mauris dictum placerat tellus eu suscipit. 
                    </p>

                    </div>
                    <div className="ms-Grid-col ms-sm12 ms-lg4">
                    <h1>SUGGESTED GROUPS</h1>
                    Suggested Groups...    
                        
                        </div>

                        </div>
                    </div>
                </div>);
    }
}

export default Teams;
