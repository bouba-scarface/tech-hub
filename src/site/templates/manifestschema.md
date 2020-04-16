# Templates manifest schema

The SalesTim template manifest describes how a template integrates into the SalesTim platform.  
Your manifest must conform to the schema hosted at:  
[https://developers.salestim.com/json-schemas/v1.0/io.salestim.automation.templates.schema.json](https://developers.salestim.com/json-schemas/v1.0/io.salestim.automation.templates.schema.json).  

The following schema sample shows all extensibility options.

## Sample full manifest

```json
{
  "$schema": "https://developers.salestim.com/json-schemas/v1.0/io.salestim.automation.templates.schema.json",
  "manifestVersion": "1.0",
  "publisher": {
    "name": "SalesTim",
    "description": "Microsoft Teams governance automation platform",
    "id": "io.salestim",
    "logo":"https://www.salestim.com/wp-content/uploads/2019/05/color.png",
    "websiteUrl": "https://www.salestim.com",
    "privacyUrl": "https://www.salestim.com/legal/privacy",
    "termsOfUseUrl": "https://www.salestim.com/legal/tos"
  },
  "templateConfiguration": {
    "approval": {
      "requireApproval": "false",
      "approvalTeam": []
    },
    "adoption": {
      "week1Subject": "",
      "week1Message": "",
      "week2Subject": "",
      "week2Message": "",
      "week3Subject": "",
      "week3Message": ""
    },
    "permanentMembership": {
      "owners": [],
      "members": []
    },
    "audienceTargeting": {
      "enabled": "true",
      "rules": "user.msPreferredLanguage.toLowerCase().includes('en')"
    },
    "id": "io.salestim.automation.templates.default.en-us",
    "language": "en-us",
    "enabled": "true",
    "version": "1.0",
    "system": "true",
    "singleton": "false",
    "name": "Basic Team",
    "description": "A basic team comprised of one 'General' channel",
    "pictureUrl": "img/defaultTemplate.jpg",
    "categories": [
      "io.salestim.gallery.categories.discover"
    ]
  },
  "clonedTeam": {
    "teamId": "",
    "teamName": "",
    "includeApps": "true",
    "includeTabs": "true",
    "includeSettings": "true",
    "includeChannels": "true",
    "includeMembers": "false"
  },
  "newTeam": {
    "namingConvention": "<%= request.team.name %>-TIM",
    "emailConvention": "TIM-<%= request.team.name %>-EN",
    "descriptionConvention": "Team created by <%= user.msDisplayName %>. Description: <%= request.team.description %>",
    "welcomeMessageConvention": "<%= request.team.welcomeMessage %>",
    "defaultName": "",
    "defaultDescription": "",
    "defaultWelcomeMessage": "",
    "teamPrivacy": "private",
    "addRequesterAsTeamOwner": "true"
  },
  "initialization": {
    "structure": {
      "template@odata.bind": "https://graph.microsoft.com/beta/teamsTemplates('standard')",
      "visibility": "Private",
      "displayName": "TIM-BASIC-EN-TEMPLATE",
      "description": "Basic team template (EN)",
      "channels": [
        {
          "displayName": "🙋🏼‍♀️ Discover SalesTim",
          "isFavoriteByDefault": true,
          "description": "This channel contains essentials contents to start using SalesTim.",
          "tabs": [
            {
              "teamsApp@odata.bind": "https://graph.microsoft.com/v1.0/appCatalogs/teamsApps('com.microsoft.teamspace.tab.web')",
              "name": "Website",
              "configuration": {
                "contentUrl": "https://www.salestim.com/"
              }
            },
            {
              "teamsApp@odata.bind": "https://graph.microsoft.com/v1.0/appCatalogs/teamsApps('com.microsoft.teamspace.tab.youtube')",
              "name": "Video",
              "configuration": {
                "contentUrl": "https://tabs.teams.microsoft.com/Youtube/Home/YoutubeTab?videoId=o8NgzVvg7nI",
                "websiteUrl": "https://www.youtube.com/watch?v=o8NgzVvg7nI"
              }
            },
            {
              "teamsApp@odata.bind": "https://graph.microsoft.com/v1.0/appCatalogs/teamsApps('com.microsoft.teamspace.tab.web')",
              "name": "Online help",
              "configuration": {
                "contentUrl": "https://help.salestim.com"
              }
            }
          ]
        }
      ],
      "memberSettings": {
        "allowCreateUpdateChannels": true,
        "allowDeleteChannels": true,
        "allowAddRemoveApps": true,
        "allowCreateUpdateRemoveTabs": true,
        "allowCreateUpdateRemoveConnectors": true
      },
      "guestSettings": {
        "allowCreateUpdateChannels": true,
        "allowDeleteChannels": true
      },
      "funSettings": {
        "allowGiphy": true,
        "giphyContentRating": "Moderate",
        "allowStickersAndMemes": true,
        "allowCustomMemes": true
      },
      "messagingSettings": {
        "allowUserEditMessages": true,
        "allowUserDeleteMessages": true,
        "allowOwnerDeleteMessages": true,
        "allowTeamMentions": true,
        "allowChannelMentions": true
      },
      "discoverySettings": {
        "showInTeamsSearchAndSuggestions": false
      },
      "installedApps": []
    },
    "contents": {}
  }
}
```

## Schema validation

SalesTim template schema adheres to the [JSON Schema Draft 4](https://json-schema.org/draft-04/json-schema-core.html) specification.  

The template schema, including all properties, options and rules is fully-described here:
[https://developers.salestim.com/json-schemas/v1.0/io.salestim.automation.templates.schema.json](https://developers.salestim.com/json-schemas/v1.0/io.salestim.automation.templates.schema.json)

## Manifest authoring in Visual Studio Code

Full Intellisense and schema validation during manifest authoring in Visual Studio Code is supported as long as your manifest starts with the following line:
```json
{
  "$schema": "https://developers.salestim.com/json-schemas/v1.0/io.salestim.automation.templates.schema.json"
}
```
