# Documentation for SalesTim API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AppsApi* | [**createApp**](Apis/AppsApi.md#createapp) | **POST** /apps | Create a virtual app
*AppsApi* | [**deleteApp**](Apis/AppsApi.md#deleteapp) | **DELETE** /apps/{id} | Delete a virtual app
*AppsApi* | [**getApps**](Apis/AppsApi.md#getapps) | **GET** /apps | Get all virtual apps in a tenant
*AppsApi* | [**regenerateAppSecret**](Apis/AppsApi.md#regenerateappsecret) | **POST** /apps/{id}/regenerateSecret | Regenerate a virtual app secret
*AppsApi* | [**updateApp**](Apis/AppsApi.md#updateapp) | **PUT** /apps/{id} | Update a virtual app
*CatalogApi* | [**getCatalogTemplates**](Apis/CatalogApi.md#getcatalogtemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog
*CatalogApi* | [**installTemplateFromStore**](Apis/CatalogApi.md#installtemplatefromstore) | **POST** /catalog/templates/installFromStore | Install a template from the public template store to your corporate catalog
*JobsApi* | [**createProvisioningJob**](Apis/JobsApi.md#createprovisioningjob) | **POST** /jobs/provisioning | Create a new provisioning job by sending a ProvisioningRequest
*JobsApi* | [**getJob**](Apis/JobsApi.md#getjob) | **GET** /jobs/{id} | Get detailed information about a job (Status, logs...)
*StoreApi* | [**getStoreCategories**](Apis/StoreApi.md#getstorecategories) | **GET** /store/categories | Get all store categories from the public template store
*StoreApi* | [**getStoreTemplate**](Apis/StoreApi.md#getstoretemplate) | **GET** /store/templates/{id} | Get a store template
*StoreApi* | [**getStoreTemplates**](Apis/StoreApi.md#getstoretemplates) | **GET** /store/templates | Get all templates from the public template store
*StoreApi* | [**getStoreTemplatesByCategory**](Apis/StoreApi.md#getstoretemplatesbycategory) | **GET** /store/templates/byCategory/{id} | Get store template from a specific category


<a name="documentation-for-models"></a>
## Documentation for Models

 - [App](.//Models/App.md)
 - [Job](.//Models/Job.md)
 - [ProvisioningRequest](.//Models/ProvisioningRequest.md)
 - [ProvisioningRequestOnBehalfOfRequester](.//Models/ProvisioningRequestOnBehalfOfRequester.md)
 - [ProvisioningRequestRequestedMembers](.//Models/ProvisioningRequestRequestedMembers.md)
 - [StoreCategory](.//Models/StoreCategory.md)
 - [StoreCategoryLabel](.//Models/StoreCategoryLabel.md)
 - [TemplateIdentifier](.//Models/TemplateIdentifier.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="appId"></a>
### appId

- **Type**: API key
- **API key parameter name**: X-APP-ID
- **Location**: HTTP header

<a name="appSecret"></a>
### appSecret

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP basic authentication

