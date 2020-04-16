# Known Issues

<Classification level="public" />

In addition to this article that describes known issues with SalesTim, please refer to:
* [Microsoft Teams Known Issues...](https://docs.microsoft.com/en-us/microsoftteams/known-issues)
* [Microsoft Graph Known Issues...](https://docs.microsoft.com/en-us/graph/known-issues)

***

## Provisionning is stopped after enabling MFA

### Behavior / Symptom / Root Cause
If you enforce MFA for the service account AFTER it has been configured in SalesTim, the provisionning process stops to work.

**Root Cause**: Enabling MFA for an account resets its credentials, access token and refresh token. Therefore the service account cannot refresh its own token anymore.

### Known Workaround
Update the service account from the "Settings" tab using the "🎭 Update" button.

### Additional Infos
* 📅 Discovery Date: 2019/12/06
* 🚦 Related Issues: N/A
* 📑 References: [Session timeouts for Office 365](https://docs.microsoft.com/en-us/office365/enterprise/session-timeouts)

***

## "Audience Targeting Rules" are not immediately applied to recently updated user profiles

### Behavior / Symptom / Root Cause
An update to a user profile may not be reflected immediately and therefore the targeting rule may not be applied immediately.

**Root Cause**: This delay is due to our user profile caching mechanism, that refreshs the user profile data during user login, preserving old values as long as tue user session is valid.  
In a future release, we'll address this by forcing a user profile refresh at a regular time interval.

### Known Workaround
Login to SalesTim from a browser window in "inprivate/incognito" mode to force user profile refresh.

### Additional Infos
* 📅 Discovery Date: 2019/05/16
* 🚦 Related Issues: [#131](https://github.com/SalesTim/app-platform/issues/131)
* 📑 References: N/A

***

## "Missing Teams in List All Teams" when creating a new template

### Behavior / Symptom / Root Cause
When creating a new template in your catalog, some older teams may not appear in search results and therefore cannot be used as a cloned team.

**Root Cause**: Some teams that were created in the past (The old days of Microsoft Teams...) but haven't been used recently by a Microsoft Teams user aren't listed by the "list all teams" endpoint from the Microsoft Graph API.

New teams will be correctly listed.
Certain old teams don't have a:
```json
"resourceProvisioningOptions": [
    "Team"
],
```
property that contains "Team", which is set on newly created teams and teams that are visited in Microsoft Teams.

### Known Workaround
Reopen the team with a team owner account (To be confirmed).

### Additional Infos
* 📅 Discovery Date: 2019/04/30
* 🚦 Related Issues: N/A
* 📑 References:
  * [Missing Teams in List All Teams...](https://docs.microsoft.com/en-us/graph/known-issues#missing-teams-in-list-all-teams)

***

## "This page is not responding" after a long time of inactivity

### Behavior / Symptom / Root Cause
After some times of inactivity using Microsoft Teams in a web browser, Microsoft Teams may raise a "This page is not responding".

**Root Cause**: Microsoft Teams raises an error while trying to renew the current user authentication token:
```
AUTHADAL: Attempting to handle adal response:
error: Token renewal call timed out
resource: https://chatsvcagg.teams.microsoft.com
error mapped to action:renewalTimeout
```

### Known Workaround
End-user have to close the teams popup and refresh the current tab.

### Additional Infos
* 📅 Discovery Date: 2019/04/30
* 🚦 Related Issues: [#117](https://github.com/SalesTim/app-platform/issues/117)
* 📑 References: N/A

***


## "Additional Wiki Tab" when creating a new team

### Behavior / Symptom / Root Cause
After cloning a team it has a wiki tab even it was not in the "source team".
If a team with a wiki tab is used as "clone source" it will have a second not configured wiki tab.

**Root Cause**: 
Microsoft Graph Issue

### Known Workaround
None

### Additional Infos
* 📅 Discovery Date: 2019/05/03
* 🚦 Related Issues: N/A
* 📑 References:
  * [MS Teams Wiki tab is cloned even it is not in the source #4495](https://github.com/microsoftgraph/microsoft-graph-docs/issues/4495)

***
