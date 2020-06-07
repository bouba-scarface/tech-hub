# AppTemplateConfiguration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**String**](string.md) | The virtual app name | [optional] [default to null]
**description** | [**String**](string.md) | The virtual app description | [optional] [default to null]
**createdBy** | [**UUID**](UUID.md) | The ID (Fron Azure AD) of the user that created the virtual app | [optional] [default to null]
**createdAt** | [**Date**](DateTime.md) | The date of creation of the virtual app | [optional] [default to null]
**id** | [**UUID**](UUID.md) | The virtual app ID, auto-generated at creation | [optional] [default to null]
**secret** | [**String**](string.md) | The virtual app secret, auto-generated at creation. It may also be regenerated later. Be careful, this property is only available at creation or after an explicit regeneration.  | [optional] [default to null]
**enabled** | [**Boolean**](boolean.md) | The virtual app status, enabled or disabled | [optional] [default to true]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

