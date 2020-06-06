# JobsApi

All URIs are relative to *https://api.salestim.io/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProvisioningJob**](JobsApi.md#createProvisioningJob) | **POST** /jobs/provisioning | Create a new provisioning job by sending a ProvisioningRequest
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{id} | Get detailed information about a job (Status, logs...)


<a name="createProvisioningJob"></a>
# **createProvisioningJob**
> Job createProvisioningJob(provisioningRequest)

Create a new provisioning job by sending a ProvisioningRequest

    Create a new provisioning job by sending a ProvisioningRequest

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provisioningRequest** | [**ProvisioningRequest**](..//Models/ProvisioningRequest.md)| A ProvisioningRequest object describing the job to execute |

### Return type

[**Job**](..//Models/Job.md)

### Authorization

[pluginId](../README.md#pluginId), [pluginSecret](../README.md#pluginSecret)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getJob"></a>
# **getJob**
> Job getJob(id)

Get detailed information about a job (Status, logs...)

    Get detailed information about a job (Status, logs...)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The job ID | [default to null]

### Return type

[**Job**](..//Models/Job.md)

### Authorization

[pluginId](../README.md#pluginId), [pluginSecret](../README.md#pluginSecret)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

