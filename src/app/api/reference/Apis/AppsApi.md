# AppsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppsApi.md#createApp) | **POST** /apps | Create a virtual app
[**deleteApp**](AppsApi.md#deleteApp) | **DELETE** /apps/{id} | Delete a virtual app
[**getApps**](AppsApi.md#getApps) | **GET** /apps | Get all virtual apps in a tenant
[**regenerateAppSecret**](AppsApi.md#regenerateAppSecret) | **POST** /apps/{id}/regenerateSecret | Regenerate a virtual app secret
[**updateApp**](AppsApi.md#updateApp) | **PUT** /apps/{id} | Update a virtual app


<a name="createApp"></a>
# **createApp**
> App createApp(app)

Create a virtual app

    Create a new virtual app and get its generated ID and secret.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**App**](..//Models/App.md)| List of properties to be updated. |

### Return type

[**App**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteApp"></a>
# **deleteApp**
> deleteApp(id)

Delete a virtual app

    Delete a virtual app

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the virtual app to delete | [default to null]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getApps"></a>
# **getApps**
> List getApps()

Get all virtual apps in a tenant

    Get all virtual apps in a tenant

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="regenerateAppSecret"></a>
# **regenerateAppSecret**
> App regenerateAppSecret(id)

Regenerate a virtual app secret

    Regenerate a virtual app secret

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The virtual app ID | [default to null]

### Return type

[**App**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateApp"></a>
# **updateApp**
> App updateApp(id, app)

Update a virtual app

    Update a virtual app

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the virtual app to update | [default to null]
 **app** | [**App**](..//Models/App.md)| List of properties to be updated. |

### Return type

[**App**](..//Models/App.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

