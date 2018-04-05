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