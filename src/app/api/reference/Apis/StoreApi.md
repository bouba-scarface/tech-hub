# StoreApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStoreCategories**](StoreApi.md#getStoreCategories) | **GET** /store/categories | Get all store categories from the public template store
[**getStoreTemplate**](StoreApi.md#getStoreTemplate) | **GET** /store/templates/{id} | Get a store template
[**getStoreTemplates**](StoreApi.md#getStoreTemplates) | **GET** /store/templates | Get all templates from the public template store
[**getStoreTemplatesByCategory**](StoreApi.md#getStoreTemplatesByCategory) | **GET** /store/templates/byCategory/{id} | Get store template from a specific category


<a name="getStoreCategories"></a>
# **getStoreCategories**
> List getStoreCategories()

Get all store categories from the public template store

    View all templates from the public [Template Store](https://store.salestim.com) or publish your own templates to the [Template Manifests Repository](https://github.com/SalesTim/template-manifests)

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/StoreCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getStoreTemplate"></a>
# **getStoreTemplate**
> Object getStoreTemplate(id)

Get a store template

    View all templates from the public [Template Store](https://store.salestim.com) or publish your own templates to the [Template Manifests Repository](https://github.com/SalesTim/template-manifests)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The template ID | [default to null]

### Return type

[**Object**](..//Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getStoreTemplates"></a>
# **getStoreTemplates**
> List getStoreTemplates()

Get all templates from the public template store

    View all templates from the public [Template Store](https://store.salestim.com) or publish your own templates to the [Template Manifests Repository](https://github.com/SalesTim/template-manifests)

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getStoreTemplatesByCategory"></a>
# **getStoreTemplatesByCategory**
> List getStoreTemplatesByCategory(id)

Get store template from a specific category

    View all templates from the public [Template Store](https://store.salestim.com) or publish your own templates to the [Template Manifests Repository](https://github.com/SalesTim/template-manifests)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The category ID | [default to null]

### Return type

[**List**](..//Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

