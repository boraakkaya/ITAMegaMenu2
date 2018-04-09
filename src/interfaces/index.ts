export interface INavigationItem
{
    title:string,
    link:string,
    description:string,
    visible:boolean,
    target:string,
    children: Array<INavigationItem>
}
export interface IMyTeam
{
    title:string,
    link:string,
}

export interface ISiteItem
{Acronym:string,
BannerColor:string,
ItemReference:{ExchangeId:string,IndexId:string,SiteId:string,Source:string,Type:string,WebId:string},
OriginalUrl:string,
Title:string,
Type:string,
Url:string,
WebTemplate:string
}