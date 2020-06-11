---
title: "Overview of SalesTim API"
description: "SalesTim API provides a unified programmability model that you can use to manage your Microsoft Teams environment and build powerful apps easily."
---

<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div class="uk-card-media-left uk-cover-container">
    <img src="/img/headers/api.jpg" alt="" uk-cover>
    <canvas width="300" height="200"></canvas>
  </div>
  <div>
    <div class="uk-card-body">
      <h3>Overview of SalesTim API</h3>
      <p>
      Here at SalesTim, we know you want to concentrate on the value of your products, services, and business process, not be challenged by the complexities of integration with Microsoft Teams.
      SalesTim API provides a unified programmability model that you can use to manage your Microsoft Teams environment and build powerful apps easily.  
      Our APIs will take care of the underlying technical complexity, leaving you free to take care of your real value proposition.
      </p>
    </div>
  </div>
</div>

## What can you do with SalesTim API?
SalesTim API is used in a lot of different industries to automate Microsoft Teams governance and improve business process across the organization, but the following examples are the most common as of today:
- Create powerful self-service templates for Microsoft Teams
- Deploy Microsoft Planner at scale with plans templates
- Create a custom approval process for your teams provisioning requests
- Apply automaticaly governance policies across all your teams
- Integrate a custom in-house and LoB apps with Microsoft Teams

> Don't hesitate to submit your ideas and scenarios!

## Powering the SalesTim Platform
The SalesTim API leverages the [SalesTim Platform](https://www.salestim.com) by offering a single endpoint to the major platform services:
- A public Microsoft Teams [Template Store](https://store.salestim.com)
- A private corporate catalog of templates and governance policies
- The SalesTim Platform powerful provisioning and governance Automation jobs engine

Learn more about these services in the [Key Concepts](/api/key-concepts) article.

## Discover and try the API
The easiest way to start exploring services available through the SalesTim API is to use our [API Explorer](/api/explorer).  

The API Explorer lets you craft REST requests, adapt the HTTP request headers, and see the data responses. Check out some of these common scenarios for working with the SalesTim API (The links take you directly to the API Explorer):

| Operation | URL |
| :---------|:----|
| **GET all templates from my corporate catalog** |	[/catalog/templates](/api/explorer/#/Store/GetStoreTemplates) |
| **POST a new team creating request** | [/jobs/provisioningRequest](/api/explorer/#/Jobs/CreateProvisioningJob) |

Note: All URIs are relative to `https://api.salestim.io/v1.0`

## How to use the API
In addition to the REST endpoints, you can use the SalesTim API through:
- Our [API SDKs](/api/use-sdks) available for multiple languages and platforms
- A [Postman Collection](/api/use-postman) that you can use from your own desktop.
- [Power Platform](/nocode/power-platform) as a custom connector to use in your `PowerApps` apps and `PowerAutomate` flows.

## Learn More
For more information about SalesTim API:
- Learn [Key Concepts](/api/key-concepts)
- Discover [Best Practices](/api/best-practices)
- Experiment with the [API Explorer](/api/explorer)
- See the [API Reference](/api/reference/)
