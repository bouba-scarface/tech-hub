# Documentation for SalesTim API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.salestim.io/v1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CatalogApi* | [**getCatalogTemplates**](Apis/CatalogApi.md#getcatalogtemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog
*CatalogApi* | [**installTemplateFromStore**](Apis/CatalogApi.md#installtemplatefromstore) | **POST** /catalog/templates/installFromStore | Install a template from the public template store to your corporate catalog
*JobsApi* | [**createProvisioningJob**](Apis/JobsApi.md#createprovisioningjob) | **POST** /jobs/provisioning | Create a new provisioning job by sending a ProvisioningRequest
*JobsApi* | [**getJob**](Apis/JobsApi.md#getjob) | **GET** /jobs/{id} | Get detailed information about a job (Status, logs...)
*PluginsApi* | [**createPlugin**](Apis/PluginsApi.md#createplugin) | **POST** /plugins | Create a new plugin
*PluginsApi* | [**deletePlugin**](Apis/PluginsApi.md#deleteplugin) | **DELETE** /plugins/{id} | Delete a plugin
*PluginsApi* | [**getPlugIns**](Apis/PluginsApi.md#getplugins) | **GET** /plugins | Get all plugins in a tenant
*PluginsApi* | [**regeneratePluginSecret**](Apis/PluginsApi.md#regeneratepluginsecret) | **POST** /plugins/{id}/regenerateSecret | Regenerate a plugin secret
*PluginsApi* | [**updatePlugin**](Apis/PluginsApi.md#updateplugin) | **PUT** /plugins/{id} | Update a plugin
*StoreApi* | [**getStoreCategories**](Apis/StoreApi.md#getstorecategories) | **GET** /store/categories | Get all store categories from the public template store
*StoreApi* | [**getStoreTemplate**](Apis/StoreApi.md#getstoretemplate) | **GET** /store/templates/{id} | Get a store template
*StoreApi* | [**getStoreTemplates**](Apis/StoreApi.md#getstoretemplates) | **GET** /store/templates | Get all templates from the public template store
*StoreApi* | [**getStoreTemplatesByCategory**](Apis/StoreApi.md#getstoretemplatesbycategory) | **GET** /store/templates/byCategory/{id} | Get store template from a specific category


<a name="documentation-for-models"></a>
## Documentation for Models

 - [CatalogTemplate](.//Models/CatalogTemplate.md)
 - [InlineObject](.//Models/InlineObject.md)
 - [InlineObject1](.//Models/InlineObject1.md)
 - [InlineObject2](.//Models/InlineObject2.md)
 - [Job](.//Models/Job.md)
 - [Plugin](.//Models/Plugin.md)
 - [PluginTemplateConfiguration](.//Models/PluginTemplateConfiguration.md)
 - [ProvisioningRequest](.//Models/ProvisioningRequest.md)
 - [ProvisioningRequestOnBehalfOfRequester](.//Models/ProvisioningRequestOnBehalfOfRequester.md)
 - [ProvisioningRequestRequestedMembers](.//Models/ProvisioningRequestRequestedMembers.md)
 - [StoreCategory](.//Models/StoreCategory.md)
 - [StoreCategoryLabel](.//Models/StoreCategoryLabel.md)
 - [StoreTemplate](.//Models/StoreTemplate.md)
 - [StoreTemplateTemplateConfiguration](.//Models/StoreTemplateTemplateConfiguration.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP basic authentication

<a name="pluginId"></a>
### pluginId

- **Type**: API key
- **API key parameter name**: X-APP-ID
- **Location**: HTTP header

<a name="pluginSecret"></a>
### pluginSecret

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header

