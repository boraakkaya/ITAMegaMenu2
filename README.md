## ita-global-navigation-v-2

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


EndPoints:
https://graph.microsoft.com/beta/me/memberOf 
Returns groups that user is member of, from here filter groups to display only Office 365 Groups by attribute groupTypes:["Unified]
Use https://graph.microsoft.com/v1.0/users/neeraj@itadev.onmicrosoft.com/memberof with Azure Function since SPFX app does not have sufficient permissions to query groups.




https://itadev.sharepoint.com/sites/teams/_api/web/webinfos
Use this endpoint to return all the web sites that user has permission to view.

Frequent Sites:


Suggested Sites:
https://itadev.sharepoint.com/_vti_bin/homeapi.ashx/sites/suggested

Followed Sites:
https://itadev.sharepoint.com/_api/social.following/my/followed(types=4)
or
https://itadev.sharepoint.com/_vti_bin/homeapi.ashx/sites/followed  

