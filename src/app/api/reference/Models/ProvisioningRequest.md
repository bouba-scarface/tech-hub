# ProvisioningRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | [**String**](string.md) | The template ID | [default to null]
**requestedTeamName** | [**String**](string.md) | Requested team name | [default to null]
**requestedTeamDescription** | [**String**](string.md) | Requested team description | [optional] [default to null]
**requestedTeamWelcomeMessage** | [**String**](string.md) | Requested team welcome message | [optional] [default to null]
**requestedMembers** | [**List**](ProvisioningRequest_requestedMembers.md) | Requested members as an array of objects | [optional] [default to null]
**requestedOwners** | [**List**](ProvisioningRequest_requestedMembers.md) | Requested owners as an array of users. User identifier could be its ID, UPN or email. | [optional] [default to null]
**onBehalfOfRequester** | [**ProvisioningRequest_onBehalfOfRequester**](ProvisioningRequest_onBehalfOfRequester.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

