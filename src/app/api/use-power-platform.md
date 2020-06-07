---
title: "Use Power Platform with the SalesTim API"
description: "Use the SalesTim API with the Microsoft Power Platform to build Microsoft Teams apps and integrations easily."
---

# Use Power Platform with the SalesTim API <Badge text="beta" type="warning"/>
<Classification label="public" />

This article explains how to register the SalesTim API as a a custom connector for the Microsoft Power Platform.

## Import the SalesTim API OpenAPI definition

To import the SalesTim API OpenAPI definition for Power Automate and Power Apps, go to [powerapps.com](https://powerapps.com) or [flow.microsoft.com](https://flow.microsoft.com).

In the navigation pane, select Data > Custom connectors.
- Select custom connector
- Select New custom connector, then choose Import an OpenAPI from URL.
- Set the connector name to **SalesTim**
- Paste this URL
```
https://dist.salestim.com/api/v1.0/open-api/io.salestim.automation.powerplatform.api.definition.json
```
- Click **Continue**
- Click **Update connector**
- Click **Close**

Now that you've created a custom connector, you can use the `SalesTim` connector from both `Power Apps` and `Power Automate`.
