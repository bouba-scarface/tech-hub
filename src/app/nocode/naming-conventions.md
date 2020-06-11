# Naming Conventions

## Purpose
You use a naming conventions to enforce a consistent naming strategy for teams created by users in your organization. A naming convention can help you and your users identify the function of the team, membership, geographic region, or who created the team. The naming covention can also help categorize teams and underlying groups in the address book. 

Intrinsically, naming conventions are a combination of values and expressions that are evaluated against a user profile and a request form, that defines the final value of fields.

## Available tags
Naming conventions can use information coming from the user profile and the user request form through the following tags.

::: warning
Be careful: These tags are **CASE-SENSITIVE**!
:::

### Request Form

| Tag | Description |
|-----|-------------|
| ```request.team.name``` | Requested team name |
| ```request.team.description``` | Requested team description |
| ```request.team.welcomeMessage``` | Requested team welcome message |
| ```request.template.name``` | Requested template name |
| ```request.request.requester.name``` | Requester name (Same as ```user.msDisplayName```) |
| ```request.request.requester.email``` | Requester email (```user.msEmail```) |


### User Profile (Active Directory attributes)

| Tag | Description |
|-----|-------------|
| ```user.msDisplayName``` | *User full name. (for example "Bob Dirac")*
| ```user.msUPN``` | *User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "bob.dirac@contoso.com") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix).* <hr>***Important: A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule.*** | 
| ```user.msEmail``` | *User email (for example: "bob.dirac@domain.com")* |
| ```user.msPreferredLanguage``` | *User preferred language in Microsoft 365.* <hr>***Language and locale codes are limited to those in the [ISO 639-1 standard](https://en.wikipedia.org/wiki/ISO_639-1).*** |
| ```user.msGivenName``` | *User given name (for example: "Bob")* |
| ```user.msCountry``` | *User country (for example: "France")* |
| ```user.msCompanyName``` | *User company name (for example: "Contoso")* |
| ```user.msDepartment``` | *User department (for example: "Marketing")* |
| ```user.msCity``` | *User city (for example: "Paris")* |
| ```user.msJobTitle``` | *User job title (for example: "Product Manager")* |
| ```user.msSurname``` | *User surname (for example: "Dirac")* |
| ```user.msUsageLocation``` |* Office 365 usage location. (for example: "US")* <hr>***Rely on the [ISO 3166-1 alpha-2 country codes...](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)*** |


## Common scenarios
In addition to tags, naming conventions can use standard javascript operators and functions.

::: tip Syntax
Naming conventions follows the [EJS syntax](https://ejs.co/#docs)
:::

### Examples: Static naming convention

#### "Add a "PRJ-" prefix to project management teams"
```javascript
PRJ-<%= request.team.name %>
```

#### "Add a "-MKT" suffix to teams related to the marketing team"
```javascript
<%= request.team.name %>-MKT
```

#### "Add marketing-related tags to teams descriptions for categorization purpose"
```javascript
<%= request.team.description %> - #marketingcampaign #retargeting #seo
```

### Examples: Dynamic naming convention

#### "Add country as a suffix to teams names based on the requester location"
```javascript
<%= request.team.name %> - <%= user.msUsageLocation %>
```

#### "Add the Business Solution name to description"
```javascript
<%= request.team.description %> - Created from the "<%= request.template.name %>" team template.
```

### Examples: Conditional naming convention

#### "Use a specific suffix for users from a specific domain, use the domain name for the others"
```javascript
<%= request.team.name %> - 
<% if (user.msEmail.includes('@contoso.fr')) { %>
CT France // Use "CT France" instead of contoso.fr
<% } else { %>
<%= user.msEmail.replace(/.*@/, '') %> // Extract domain name from user email address
<% } %>
```

## Tips

::: warning Team name length
The total team name length (including prefix, suffix, etc...) is restricted to **53 characters**.
:::

::: warning Special characters
The following characters are forbidden in teams names:
```
" * : < > ? / \ |
```
But you can use "-" as a separator.
:::
