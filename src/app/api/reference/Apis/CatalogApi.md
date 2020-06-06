# CatalogApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogTemplates**](CatalogApi.md#getCatalogTemplates) | **GET** /catalog/templates | Get all templates from your corporate catalog
[**installTemplateFromStore**](CatalogApi.md#installTemplateFromStore) | **POST** /catalog/templates/installFromStore | Install a template from the public template store to your corporate catalog


<a name="getCatalogTemplates"></a>
# **getCatalogTemplates**
> List getCatalogTemplates()

Get all templates from your corporate catalog

    Get all templates from your corporate catalog

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/CatalogTemplate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [pluginId](../README.md#pluginId), [pluginSecret](../README.md#pluginSecret)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="installTemplateFromStore"></a>
# **installTemplateFromStore**
> CatalogTemplate installTemplateFromStore(inlineObject)

Install a template from the public template store to your corporate catalog

    Install a template from the public template store to your corporate catalog

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](..//Models/InlineObject.md)|  |

### Return type

[**CatalogTemplate**](..//Models/CatalogTemplate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

