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

[**List**](..//Models/object.md)

### Authorization

[appId](../README.md#appId), [appSecret](../README.md#appSecret), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="installTemplateFromStore"></a>
# **installTemplateFromStore**
> Object installTemplateFromStore(templateIdentifier)

Install a template from the public template store to your corporate catalog

    Install a template from the public template store to your corporate catalog

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateIdentifier** | [**TemplateIdentifier**](..//Models/TemplateIdentifier.md)| The template to be installed |

### Return type

[**Object**](..//Models/object.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

