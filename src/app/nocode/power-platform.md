---
title: "No-Code Solutions with Power Platform and SalesTim API"
description: "Use the SalesTim API with the Microsoft Power Platform to build Microsoft Teams apps and integrations easily."
---

# Use the SalesTim API with Power Platform <Badge text="beta" type="warning"/>
<Classification label="public" />

This article explains how to register the SalesTim API as a a custom connector for the Microsoft Power Platform.

## Import the SalesTim API OpenAPI definitions

To import the SalesTim API OpenAPI definitions for Power Automate and Power Apps, go to [powerapps.com](https://powerapps.com) or [flow.microsoft.com](https://flow.microsoft.com).

### Add the SalesTim Store Connector
The `SalesTim Store Connector` gives you access to teams templates hosted in our free [Microsoft Teams Template Store](https://store.salestim.com).

In the navigation pane, select Data > Custom connectors.
- Select custom connector
- Select New custom connector, then choose Import an OpenAPI from URL.
- Set the connector name to **SalesTim Template Store**
- Paste this URL
```
https://dist.salestim.com/api/v1.0/open-api/power-platform/io.salestim.automation.powerplatform.store.api.definition.json
```
- Click **Continue**
- Click **Update connector**
- Click **Close**

### Add the SalesTim Admin Connector`
The `SalesTim Admin Connector` gives you access to major features to administer your SalesTim Platform environment, such as managing your corporate catalog of teams templates and your virtual apps.

In the navigation pane, select Data > Custom connectors.
- Select custom connector
- Select New custom connector, then choose Import an OpenAPI from URL.
- Set the connector name to **SalesTim Admin**
- Paste this URL
```
https://dist.salestim.com/api/v1.0/open-api/power-platform/io.salestim.automation.powerplatform.admin.api.definition.json
```
- Click **Continue**
- Click **Update connector**
- Click **Close**

### Add the SalesTim Teams Governance Connector
The `SalesTim Teams Governance Connector` gives you access to all the powerful features of our Governance API, such as managing your teams or start a new team provisioning job.

In the navigation pane, select Data > Custom connectors.
- Select custom connector
- Select New custom connector, then choose Import an OpenAPI from URL.
- Set the connector name to **SalesTim Teams Governance**
- Paste this URL
```
https://dist.salestim.com/api/v1.0/open-api/power-platform/io.salestim.automation.powerplatform.virtualapps.api.definition.json
```
- Click **Continue**
- Click **Update connector**
- Click **Close**

## Next Steps
Now that you've created a custom connector, you can use the `SalesTim` connector from both `Power Apps` and `Power Automate`.
