---
title: "Getting Started with SalesTim API"
description: "This article describes the basic aspects and the keys to start working with the SalesTim API."
---

# Getting Started with SalesTim API
<Classification label="public" />

---

**TABLE OF CONTENTS**  
[[toc]]

---

This article describes the basic aspects and the keys to start working with the SalesTim API.

## Use API Explorer to get to know the API
The easiest way to start exploring the data and services available through SalesTim API is to use [API Explorer](/api/explorer).  
API Explorer lets you craft REST requests, adapt the HTTP request headers, and see the data responses.


## Authenticate with SalesTim API
Data and services in SalesTim API are exposed through different endpoints, that may use three different authentication schemes.  
In this article, you'll only get an overview, therefore please refer to the [API Explorer](/api/explorer) to identify the authentication scheme for each endpoint.

### Anonymous Access
Anonymous access is enabled for endpoints related to the public [Template Store](https://store.salestim.com) (read-only access only). 
> Applies to endpoints under `/store`.

### OAuth + JWT
OAuth is primarily used to authenticate the SalesTim Platform administrators and catalog managers using Azure AD to manage the corporate catalog of templates and the virtual apps.
> Applies to endpoints under `/apps` and `/catalog`

A valid Microsoft 365 access token issued by Azure AD is required, and expected by SalesTim API in the HTTP `Authorization` request header with a `bearer` token such as:
```yaml
{
  Authorization: "bearer <JWT_TOKEN>"
}
```

### API Keys
API keys are used by SalesTim virtual apps to access the SalesTim API securely.
> Applies to endpoints under `/catalog` and `/jobs`

SalesTim API expects two headers to authenticate virtual apps:
```yaml
{
  X-APP-ID: "<APP_ID>",  # The virtual app id
  X-API-KEY: "<API_KEY>" # The virtual app api key
}
```

The app ID (`<APP_ID>`) and API key (`<API_KEY>`) could be obtained by making a POST to `/apps` to create a virtual app.  
Try it in our [API Explorer](/api/explorer.html#/Apps/CreateApp)

:::warning API Key
For obvious security reasons, the api key is only accessible at the creation of a virtual and cannot be retreived later.  
The API key could also be regenerated at any time by making a POST to `/apps/{id}/regenerateSecret`
:::

