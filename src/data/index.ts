import { IMyTeam } from "../interfaces";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";
import {SPHttpClient, GraphHttpClient, HttpClient} from "@microsoft/sp-http";

export async function getMyTeams(ctx:ApplicationCustomizerContext):Promise<Array<IMyTeam>>
{    
    let myTeamsArray = [];
    let teamSitesArray  =  await getTeamSites(ctx);
    let groupSitesArray = await getGroupSites(ctx);
    
    myTeamsArray = myTeamsArray.concat(teamSitesArray,groupSitesArray);
    console.log("My Teams Arraya : ", myTeamsArray);

    return myTeamsArray;
}

export async function getTeamSites(ctx:ApplicationCustomizerContext):Promise<Array<IMyTeam>>
{
    let teamSitesArray = [];
    await ctx.spHttpClient.get("https://itadev.sharepoint.com/sites/teams/_api/web/webinfos",SPHttpClient.configurations.v1,{}).then(async(response)=>{
        await response.json().then(async(data)=>{
            console.log("Team Sites Array ", data.value);
            data.value.map((item,index)=>{                
                teamSitesArray.push({title:item.Title,link:item.ServerRelativeUrl});
            })
        })
    })

    return teamSitesArray;

}
export async function getGroupSites(ctx:ApplicationCustomizerContext):Promise<Array<IMyTeam>>
{
    let groupSitesArray = [];
    
    await ctx.httpClient.get("https://itauserprofilemanager.azurewebsites.net/api/getteamsitesfor?account=bora@itadev.onmicrosoft.com",HttpClient.configurations.v1,{}).then(async(response)=>{
        await response.json().then(async(data)=>{
            console.log("Group Sites Array ", data.value);
            data.value.map((item,index)=>{
                if(item.groupTypes != null && item.groupTypes.length>0 && item.groupTypes[0] == "Unified")
                {
                    groupSitesArray.push({title:item.displayName,link:`/sites/${item.mailNickname}`})
                }                
            })
        })
    })


    return groupSitesArray;

}