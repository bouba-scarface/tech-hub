# Microsoft Graph Permissions

<Classification label="public" />

## Admin-restricted permissions
Depending on the permission type (Delegated or Application), some high-privilege permissions in the Microsoft ecosystem are set to admin-restricted.  
Examples of these kinds of permissions include the following:
* Read all user's full profiles by using ```User.Read.All```
* Write data to an organization's directory by using ```Directory.ReadWrite.All```
* Read all groups in an organization's directory by using ```Groups.Read.All```

For SalesTim to access data in Microsoft Graph, your administrator must grant it the correct permissions via a consent process.  

Learn more:
* [SalesTim Install and Setup Guide](https://help.salestim.com/articles/3505270-install-salestim-app-on-microsoft-teams)
* [Azure AD application consent experience...](https://docs.microsoft.com/en-us/azure/active-directory/develop/application-consent-experience)

## Required Permissions

For SalesTim to work properly and perform some administrative operations, it requires the following permissions:

| Scope | Usage | Admin Consent Required |
|-------|-------|:----------------------:|
| ```AppCatalog.ReadWrite.All``` | *Allows the app to create, read, update, and delete apps in the app catalogs.* <hr>***Allows SalesTim to manage its "Targeted Apps" packages to your corporate store.*** | Yes |
| ```Directory.AccessAsUser.All``` | *Allows the app to have the same access to information in the directory as the signed-in user.* <hr>***Allows SalesTim to find the relevant people involved in approval processes and perform advanced users security checks.*** | Yes |
| ```Group.ReadWrite.All``` | *Allows the app to create groups and read all group properties and memberships on behalf of the signed-in user. Additionally allows group owners to manage their groups and allows group members to update group content.* <hr>***Allows SalesTim to manage teams from Microsoft Teams and their underlying groups.*** | Yes |
| ```Mail.Send``` | *Allows the app to send mail as users in the organization.* <hr>***Allows SalesTim to send some notification emails.*** | No |
| ```Notifications.ReadWrite.CreatedByApp``` | *Allow the app to deliver its notifications on behalf of signed-in users. Also allows the app to read, update, and delete the user’s notification items for this app.*  <hr>***Allows SalesTim to send some in-app notification in Microsoft Teams.*** | No |
| ```offline_access``` (OpenID) | *Allows the app to read and update user data, even when they are not currently using the app.* <hr>***Allows SalesTim to perform operations in the background on behalf of a user.*** | No |
| ```profile``` (OpenID) | *Allows the app to see your users' basic profile (name, picture, user name).*  <hr>***Allows SalesTim to get current user basic profile.*** | No |
| ```Sites.FullControl.All``` | *Allows the app to have full control to SharePoint sites in all site collections on behalf of the signed-in user.* <hr>***Allows SalesTim to manage teams from Microsoft Teams and their underlying SharePoint sites.*** | Yes |
| ```User.Read.All``` | *Allows the app to read the full set of profile properties, reports, and managers of other users in your organization, on behalf of the signed-in user.* <hr>***Allows SalesTim to get current user profile properties and related teams. Also used for the "Templates Audience Targeting" feature.*** | No |

Learn more with [Microsoft Graph permissions reference...](https://docs.microsoft.com/en-us/graph/permissions-reference)

## Service Account
A service account is a user identity that is associated with a service executable (such as SalesTim) for the purpose of providing a security context for that service.

**Why do we NEED a service account?**  
SalesTim relies intensively on the Microsoft Graph API. Therefore it's important to understand its permissions model and basic requirements.  

**Understand delegated and application permissions**  
Microsoft Graph has two types of permissions:
* ***Delegated permissions*** are used by apps that have a signed-in user present. For these apps either the user or an administrator consents to the permissions that the app requests and the app can act as the signed-in user when making calls to Microsoft Graph. Some delegated permissions can be consented by non-administrative users, but some higher-privileged permissions require administrator consent.
* ***Application permissions*** are used by apps that run without a signed-in user present. For example, apps that run as background services or daemons. Application permissions can only be consented by an administrator.

::: tip
Due to some Microsoft Graph functional and technical limitations, SalesTim now relies on a delegated permission model. In the future, SalesTim will switch to an application model.
::: 

Learn more about [Authentication and authorization basics for Microsoft Graph...](https://docs.microsoft.com/en-us/graph/auth/auth-concepts#microsoft-graph-permissions)

**How we're securing it?**
- **Least-Privilege Administrative Models**: Every single requested permission scope is documented and justified. See [Required Permissions](#required-permissions)
- **Authentication**: We're not storing any login / password combination, and service account configuration can only be performed by one of your administrators.

**Minimal requirements**  
Service account minimal requirements:
- Must be assigned at least an Office 365 E1 license
  * Why: The service account must be a regular Office 365 user
- Must be a member of your Office 365 Global admins group
  * Why: To perform administrative operations on groups, especially gain the "owner" status on any existing group.
- Must have an enabled license to Microsoft Teams
  * Why: To perform administrative operations on Microsoft Teams artefacts
- Must have an enabled license to Exchange Online and its Exchange Online mailbox must be provisioned
  * Why: To send email notifications in a secure way inside customer's domain, respecting internal mail flow rules

::: tip
Learn how to [setup the service account](https://help.salestim.com/articles/3507462-set-up-the-service-account)
:::

::: warning MFA (Multi-factor authentication)
If you enforce MFA for the service account AFTER it has been configured in SalesTim, you MUST update it from the "Settings" tab using the "🎭 Update" button.
:::

**Is the service account visible to end-users?**  
Even if the service account is performing actions in the background (Such as provisioning and other administrative operations), it may appear to end-user in some cases:
- It is seen as the teams and associated resources (such as planner) creator
- Its profile picture and name appear as the sender of notifications

So choose the name you want, this can be the name of your IT Service for instance, and add a nice picture! :-)

## Security Best practices

This list is for sure not exhaustive, but may give you some guidelines on how to secure your service accounts:

### 1. Enforce service account security with MFA
SalesTim service account supports Multi-Factor Authentication (MFA). MFA adds an additional layer of protection, ensuring that service account declaration or update is done by an authorized person.

### 2. Keep access limited
Ensure you only allocate AD service accounts the minimum privileges they require for the tasks they need to carry out, and don’t give them any more access than is necessary. In many cases you can remove the functionality for remote access, terminal service login, internet access, and remote control rights.

### 3. Create service accounts from scratch.
Don’t create service accounts in Active Directory by copying old ones, as you might accidentally be copying from a service account with much higher privileges than you need. This could lead to security issues and account misuse if you give someone an account with access to resources or information they shouldn’t be privy to.

### 4. Don’t put service accounts in built-in privileged groups.
Putting service accounts in groups with built-in privileges can be risky, because each person in the group will have access to the service account’s credentials. If there’s account misuse, it can be hard to figure out who the offender is. If you need a service account for a privileged group, create a new group with the same privileges and allow access only to the service account.

### 5. Control password configuration.
You can set a service account so the user can’t change their own password. You can also set it so the account can’t be delegated to someone else. This ensures the administrator controls the password, and nobody other than authorized users has access to the account.

### 6. Enable auditing.
Be sure to enable auditing for all service accounts and related objects. Once auditing is enabled, regularly check the logs to see who’s using the accounts, when, and for what purposes. Auditing is one of the most important of the best practices: it helps ensure security, verifies internal processes and compliance measures are being followed, and can discover any issues or breaches before too much time passes.

### 7. Implement access rights management software.
Carefully managing your Active Directory service accounts is crucial to preventing misuse of broad access and privileges. An access rights management tool can be beneficial to ensure user accounts are set up and managed with appropriate permissions and access.
