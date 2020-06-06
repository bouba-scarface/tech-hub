# PluginsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlugin**](PluginsApi.md#createPlugin) | **POST** /plugins | Create a new plugin
[**deletePlugin**](PluginsApi.md#deletePlugin) | **DELETE** /plugins/{id} | Delete a plugin
[**getPlugIns**](PluginsApi.md#getPlugIns) | **GET** /plugins | Get all plugins in a tenant
[**regeneratePluginSecret**](PluginsApi.md#regeneratePluginSecret) | **POST** /plugins/{id}/regenerateSecret | Regenerate a plugin secret
[**updatePlugin**](PluginsApi.md#updatePlugin) | **PUT** /plugins/{id} | Update a plugin


<a name="createPlugin"></a>
# **createPlugin**
> Plugin createPlugin(inlineObject1)

Create a new plugin

    Create a new plugin and get its generated ID and secret.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](..//Models/InlineObject1.md)|  |

### Return type

[**Plugin**](..//Models/Plugin.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deletePlugin"></a>
# **deletePlugin**
> deletePlugin(id)

Delete a plugin

    Delete a plugin

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the plugin to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getPlugIns"></a>
# **getPlugIns**
> List getPlugIns()

Get all plugins in a tenant

    Get all plugins in a tenant

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/Plugin.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="regeneratePluginSecret"></a>
# **regeneratePluginSecret**
> Plugin regeneratePluginSecret(id)

Regenerate a plugin secret

    Regenerate a plugin secret

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The plugin ID | [default to null]

### Return type

[**Plugin**](..//Models/Plugin.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updatePlugin"></a>
# **updatePlugin**
> Plugin updatePlugin(id, inlineObject2)

Update a plugin

    Update a plugin

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the plugin to update | [default to null]
 **inlineObject2** | [**InlineObject2**](..//Models/InlineObject2.md)|  |

### Return type

[**Plugin**](..//Models/Plugin.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

