# PluginTemplateConfiguration
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**String**](string.md) | The plugin name | [optional] [default to null]
**description** | [**String**](string.md) | The plugin description | [optional] [default to null]
**createdBy** | [**UUID**](UUID.md) | The ID (Fron Azure AD) of the user that created the plugin | [optional] [default to null]
**createdAt** | [**Date**](DateTime.md) | The date of creation of the plugin | [optional] [default to null]
**id** | [**UUID**](UUID.md) | The plugin ID, auto-generated at creation | [optional] [default to null]
**secret** | [**String**](string.md) | The plugin secret, auto-generated at creation. It may also be regenerated later. Be careful, this property is only available at creation or after an explicit regeneration.  | [optional] [default to null]
**enabled** | [**Boolean**](boolean.md) | The plugin status, enabled or disabled | [optional] [default to true]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

