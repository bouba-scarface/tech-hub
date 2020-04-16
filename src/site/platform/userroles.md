# Role Based Access Control

<Classification level="public" />

Role based access control (RBAC) functionality enables application admins to limit the permissions of some users within a team.

## Roles and Profiles
Here is the list user roles and profiles for the key features of SalesTim:

| Features | Description | End-Users | Catalog Managers | Administrators |
|----------|-------------|:---------:|:----------------:|:--------------:|
| My teams | View its own teams from the homepage | ✔ | ✔ | ✔ |
| New team | Create a new team based on a template | ✔ | ✔ | ✔ |
| Requests approval | Approve / Reject an end-user request | ✔ | ✔ | ✔ |
| Manage templates | Create / Update / Delete team templates, define their contents, approvers and audience targeting | | ✔ | ✔ |
| Manage governance policies | Define governance policies for each team template, security and permanent owners / members | | ✔ | ✔ |
| View analytics | View usage data and reports | | ✔ | ✔ |
| Service account management | Define / Remove service account | | | ✔ |
| Read audit trails | View company-wide and user-level audit trails | | | ✔ |
| Rights management | Define Catalog managers | | | ✔ |
| Apps & API management | Manage LoB integrations, Create / Delete App Id and App keys | | | ✔ |

## Security Groups

As of today, to access their respective features in SalesTim, Catalog Managers and Administrators must be members of the "Office 365 Global Administrators" group.  
In a future release, we'll offer more granularity, especially to delegate catalog management to specific non-administrators users.
